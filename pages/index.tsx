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

const { home, page } = PRISMIC_CUSTOM_TYPES;

export interface QueryProps {
  lang: string;
}

const Page: NextPage<PageProps> = ({
  data,
  type,
  page404Data,
  e,
}) => {
  if (data) {
    switch (type) {
      case page:
        return <PageTemplate data={data} />;
      default:
        return <PageTemplate data={data} />;
    }
  }
  if (page404Data) {
    return <PageTemplate data={page404Data} />;
  }
  return <Error statusCode={e ? e.status : 404} />;
};

Page.getInitialProps = async ({ req, res, asPath }: NextPageContext): Promise<PageProps> => {
  const results = await fetchDocuments();
  const documentRelations = await makeDocumentRelations(results);
  const uid = isHomepage(asPath || '') ? null : asPath?.replace(/\/$/, '').split('/').pop();
  const localePrefix = getLocalePrefix(asPath || '/');
  const type = isHomepage(asPath || '') ? home : page;
  const query: QueryProps = {
    lang: LOCALES_MAP[localePrefix] ?? LOCALES_MAP.default,
  };
  const link_type = 'Document';
  const { lang } = query;
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
