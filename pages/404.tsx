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

Page404.getInitialProps = async ({ query }: NextPageContext): Promise<PageProps> => fetchContent(null, null, query);

export default Page404;
