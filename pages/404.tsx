import React from 'react';
import PropTypes from 'prop-types';
import fetchContent from '../api/prismic/helper/fetchContent';
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

Page404.getInitialProps = async ({ query }) => fetchContent(null, null, query);

Page404.propTypes = {
  globalConfig: PropTypes.object,
  error400: PropTypes.bool,
};

export default Page404;
