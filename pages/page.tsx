import React from 'react';
import { NextPage, NextPageContext } from 'next';
import PageTemplate from '../src/templates/Page';
import fetchContent from '../api/prismic/helper/fetchContent';
import { PageProps } from './types/page.types';

const Page: NextPage<PageProps> = ({ data, globalConfig, error400 }) => (
  <PageTemplate
    {...{
      data,
      globalConfig,
      error400,
    }}
  />
);

Page.getInitialProps = async ({ res, asPath, query }: NextPageContext): Promise<PageProps> => {
  const uid = asPath && asPath.substr(asPath.lastIndexOf('/') + 1);
  const fetchedContent = await fetchContent('page', uid, query);
  const statusCode = fetchedContent && fetchedContent.data ? 200 : 404;

  if (res) {
    res.statusCode = statusCode;
  }

  return fetchedContent;
};

export default Page;
