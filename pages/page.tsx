import React from 'react';
import {NextPage, NextPageContext} from 'next';
import PageTemplate from '../src/templates/Page';
import fetchContent from '../api/prismic/helper/fetchContent';
import {PageProps} from './types/page.types';

const Page: NextPage<PageProps> = ({
  data,
  globalConfig,
  error400,
}) => (
  <PageTemplate {...{
    data,
    globalConfig,
    error400,
  }}
  />
);

Page.getInitialProps = async ({ asPath, query }: NextPageContext): Promise<PageProps> => {
  const uid = asPath && asPath.substr(asPath.lastIndexOf('/') + 1);
  return fetchContent('page', uid, query);
};

export default Page;
