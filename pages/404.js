import React from 'react';
import fetchContent from '../api/prismic/fetchContent';
import PageTemplate from '../src/templates/Page';

const Page404 = ({
  globalConfig,
  error400,
}) => (
  <PageTemplate {...{
      globalConfig,
      error400,
    }}
  />

);

Page404.getInitialProps = async ({ req }) =>
  await fetchContent(req);

export default Page404;
