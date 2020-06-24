import React from 'react';
import get from 'lodash/get';
import { NextPage, NextPageContext } from 'next';
import Error from './_error';
import { fetchDocumentContent, fetchDocuments } from '../prismic/helper/fetchContent';
import { LOCALES_MAP, PRISMIC_CUSTOM_TYPES } from '../prismic/config';
import PageTemplate from '../src/components/templates/PageTemplate';
import { PageProps } from '../prismic/types';
import makeDocumentRelations from '../prismic/helper/makeDocumentRelations';
import linkResolver from '../prismic/helper/linkResolver';
import getLocalePrefix from '../src/helpers/getLocalePrefix';

const { home, page } = PRISMIC_CUSTOM_TYPES;

export interface QueryProps {
  lang: string;
}

const Page: NextPage<PageProps> = ({
  data,
  type,
  sharedData,
  page404Data,
  serverReqUrl,
  documentRelations,
  e,
}) => {
  if (data) {
    switch (type) {
      case page:
        return <PageTemplate data={data} sharedData={sharedData} serverReqUrl={serverReqUrl || ''} documentRelations={documentRelations} />;
      default:
        return <PageTemplate data={data} sharedData={sharedData} serverReqUrl={serverReqUrl || ''} documentRelations={documentRelations} />;
    }
  }
  if (page404Data) {
    return <PageTemplate data={page404Data} sharedData={sharedData} serverReqUrl={serverReqUrl || ''} documentRelations={documentRelations} />;
  }
  return <Error statusCode={e ? e.status : 404} />;
};

Page.getInitialProps = async ({ req, res, asPath }: NextPageContext): Promise<PageProps> => {
  const results = await fetchDocuments();
  const documentRelations = await makeDocumentRelations(results);
  const uid = asPath?.split('/').pop();
  const localePrefix = getLocalePrefix(asPath || '/');
  const type = uid ? page : home;
  const query: QueryProps = {
    lang: get(LOCALES_MAP, localePrefix, LOCALES_MAP.default),
  };
  const link_type = 'Document';
  const { lang } = query;
  const url = undefined;
  const path = linkResolver({
    link_type, type, uid, url, lang,
  }, documentRelations);

  let validPath = false;

  if (asPath === path) {
    validPath = true;
  }

  const fetchedContent = await fetchDocumentContent(req, query, validPath, type, uid);

  const statusCode = fetchedContent && fetchedContent.data ? 200 : 404;
  if (res) { res.statusCode = statusCode; }

  return { ...fetchedContent, documentRelations };
};

export default Page;
