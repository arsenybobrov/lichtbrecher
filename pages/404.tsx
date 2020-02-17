import React from 'react';
import {NextApiRequest, NextPage, NextPageContext} from 'next';
import fetchContent from '../api/prismic/helper/fetchContent';
import PageTemplate from '../src/templates/Page';
import { PageProps } from './types/page.types';
import { initializeApi } from '../api/prismic/helper/prismicApi';

const Page404: NextPage<PageProps> = ({ globalConfig, error400, data }) => (
  <PageTemplate
    {...{
      data,
      globalConfig,
      error400,
    }}
  />
);

Page404.getInitialProps = async ({ res, req, query }: NextPageContext): Promise<PageProps> => {
  if (res && req) {
    res.statusCode = 404;
    await initializeApi(req as NextApiRequest);
  } else {
    initializeApi();
  }

  return fetchContent(null, null, query);
};

export default Page404;
