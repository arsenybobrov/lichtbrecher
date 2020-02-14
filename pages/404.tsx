import React from 'react';
import {NextPage, NextPageContext} from 'next';
import fetchContent from '../api/prismic/helper/fetchContent';
import PageTemplate from '../src/templates/Page';
import {PageProps} from './types/page.types';

const Page404: NextPage<PageProps> = ({
  globalConfig,
  error400,
  data,
}) => (
  <PageTemplate {...{
    data,
    globalConfig,
    error400,
  }}
  />
);

Page404.getInitialProps = async ({res, query }: NextPageContext): Promise<PageProps> => {
  if (res) res.statusCode = 404;
  return fetchContent(null, null, query)
};

export default Page404;
