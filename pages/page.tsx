import React from 'react';
import { NextApiRequest, NextPage, NextPageContext } from 'next';
import PageTemplate from '../src/templates/Page';
import fetchContent from '../api/prismic/helper/fetchContent';
import { PageProps } from '../pageTypes/page.types';
import { initializeApi } from '../api/prismic/helper/prismicApi';

const Page: NextPage<PageProps> = ({ data, globalConfig, error400 }) => (
  <PageTemplate
    {...{
      data,
      globalConfig,
      error400,
    }}
  />
);

Page.getInitialProps = async ({ res, req, asPath, query }: NextPageContext): Promise<PageProps> => {
  const uid = asPath && asPath.substr(asPath.lastIndexOf('/') + 1);
  const fetchedContent = await fetchContent('page', uid, query);
  const statusCode = fetchedContent && fetchedContent.data ? 200 : 404;

  if (res) {
    res.statusCode = statusCode;
    await initializeApi(req as NextApiRequest);
  } else {
    await initializeApi();
  }

  return fetchedContent;
};

export default Page;
