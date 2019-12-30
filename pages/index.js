import React from 'react';
import HomepageTemplate from '../src/templates/Homepage';
import fetchContent from '../api/prismic/fetchContent';

const Index = ({
  data,
  globalConfig,
  error400,
}) => (
  <HomepageTemplate {...{
      data,
      globalConfig,
      error400,
    }}
  />
);

Index.getInitialProps = async ({ req }) =>
  await fetchContent(req, 'homepage');

export default Index;
