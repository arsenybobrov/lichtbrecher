import React from 'react';
import PageTemplate from '../src/templates/Page';
import fetchContent from '../api/prismic/fetchContent';

const Page = ({
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

Page.getInitialProps = async ({ req }) =>
  await fetchContent(req, 'page', req.params.uid);

export default Page;
