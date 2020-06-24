import React from 'react';
import { NextPage, NextPageContext } from 'next';
import get from 'lodash/get';
import Error from './_error';
import { fetchDocumentContent } from '../prismic/helper/fetchContent';
import { PRISMIC_CUSTOM_TYPES, LOCALES, LOCALES_MAP } from '../prismic/config';
import PageTemplate from '../src/components/templates/PageTemplate';
import { PageProps } from '../prismic/types';

const { home, page } = PRISMIC_CUSTOM_TYPES;

export interface QueryProps {
  lang: string;
}

export const getLocalePrefix = (asPath: string) => {
  const localePrefix = get(LOCALES, asPath.split('/')[1], '');
  return localePrefix;
};

export const isHomepage = (asPath: string) => {
  if (
    asPath === '/' ||
    asPath === `/${getLocalePrefix(asPath)}` ||
    asPath === `/${getLocalePrefix(asPath)}/`
  ) {
    return true;
  }
  return false;
};

export const urlHasLocalePrefix = (asPath: string) => {
  const pathArray = asPath.match(/\/.+?/g) || [];
  if (pathArray.length === 1) return false;
  if (pathArray.length > 1) return true;
  return false;
};

export const isLocaleValid = (asPath: string) => !!get(LOCALES, asPath.split('/')[1], null);

const Page: NextPage<PageProps> = ({
  data, type, sharedData, page404Data, serverReqUrl, e,
}) => {
  if (data) {
    switch (type) {
      case page:
        return <PageTemplate data={data} sharedData={sharedData} serverReqUrl={serverReqUrl || ''} />;
      default:
        return <PageTemplate data={data} sharedData={sharedData} serverReqUrl={serverReqUrl || ''} />;
    }
  }
  if (page404Data) {
    return <PageTemplate data={page404Data} sharedData={sharedData} serverReqUrl={serverReqUrl || ''} />;
  }
  return <Error statusCode={e ? e.status : 404} />;
};

Page.getInitialProps = async ({ req, res, asPath }: NextPageContext): Promise<PageProps> => {
  const path = asPath || '';
  const type = isHomepage(path) ? home : page;
  let uid = isHomepage(path) ? null : '--404__error--';
  const query: QueryProps = {
    lang: get(LOCALES_MAP, path.split('/')[1], LOCALES_MAP.default),
  };

  if (!isHomepage(path) && !urlHasLocalePrefix(path)) {
    uid = isHomepage(path) ? null : path.substr(path.lastIndexOf('/') + 1);
  }

  if (!isHomepage(path) && urlHasLocalePrefix(path) && isLocaleValid(path)) {
    uid = isHomepage(path) ? null : path.substr(path.lastIndexOf('/') + 1);
  }

  const fetchedContent = await fetchDocumentContent(req, query, type, uid);

  const statusCode = fetchedContent && fetchedContent.data ? 200 : 404;
  if (res) { res.statusCode = statusCode; }

  return fetchedContent;
};

export default Page;
