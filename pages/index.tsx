import React from 'react';
import { NextApiRequest, NextPage, NextPageContext } from 'next';
import HomepageTemplate from '../src/templates/Homepage';
import fetchContent from '../api/prismic/helper/fetchContent';
import { PageProps } from './types/page.types';
import { initializeApi } from '../api/prismic/helper/prismicApi';

const Index: NextPage<PageProps> = ({ data, globalConfig, error400 }) => (
  <HomepageTemplate
    {...{
      data,
      globalConfig,
      error400,
    }}
  />
);

Index.getInitialProps = async ({ res, req, query }: NextPageContext): Promise<PageProps> => {
  if (res && req) {
    await initializeApi(req as NextApiRequest);
  } else {
    await initializeApi();
  }

  return fetchContent('homepage', null, query);
};
export default Index;
