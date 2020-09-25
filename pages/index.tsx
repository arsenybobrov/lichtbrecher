import React from 'react';
import { NextPage, NextPageContext } from 'next';
import Error from './_error';
import { fetchDocumentContent, fetchDocuments } from '../prismic/helpers/fetchContent';
import { LOCALES_MAP, PRISMIC_CUSTOM_TYPES } from '../prismic/config';
import PageTemplate from '../src/components/templates/PageTemplate';
import { PageProps } from '../prismic/types';
import makeDocumentRelations from '../prismic/helpers/makeDocumentRelations';
import linkResolver from '../prismic/helpers/linkResolver';
import getLocalePrefix from '../src/helpers/getLocalePrefix';
import isHomepage from '../src/helpers/isHomepage';
import isClient from '../src/helpers/isClient';

export interface QueryProps {
  lang: string;
}

interface Cache {
  cachedResults?: Array<Object>;
}

const { home, page } = PRISMIC_CUSTOM_TYPES;
let cache: Cache = {};

const Page: NextPage<PageProps> = ({
  data,
  type,
  page404Data,
  e,
}) => (
  <>
    {data && (type === home || type === page) && <PageTemplate data={data} />}
    {page404Data && <PageTemplate data={page404Data} />}
    {!data && !page404Data && <Error statusCode={e ? e.status : 404} />}
  </>
);

Page.getInitialProps = async ({ req, res, asPath }: NextPageContext): Promise<PageProps> => {
  const localePrefix = getLocalePrefix(asPath || '/');
  const query: QueryProps = {
    lang: LOCALES_MAP[localePrefix] ?? LOCALES_MAP.default,
  };
  const { lang } = query;

  if (!isClient()) {
    cache = {};
  }

  let results;
  if (cache.cachedResults) {
    results = cache.cachedResults;
  } else {
    results = await fetchDocuments();
  }

  if (!cache.cachedResults) {
    cache.cachedResults = results;
  }

  const documentRelations = await makeDocumentRelations(results);

  const uid = isHomepage(asPath || '') ? null : asPath?.replace(/\/$/, '').split('/').pop();
  const type = isHomepage(asPath || '') ? home : page;
  const link_type = 'Document';

  const path = linkResolver({
    link_type, type, uid, lang,
  }, documentRelations);

  let validPath = false;

  if (asPath === path) {
    validPath = true;
  }

  const fetchedContent = await fetchDocumentContent(req, query, validPath, type, uid);

  const statusCode = fetchedContent && fetchedContent.data ? 200 : 404;
  if (res) { res.statusCode = statusCode; }

  return { ...fetchedContent };
};

export default Page;
