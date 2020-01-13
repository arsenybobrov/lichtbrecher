import React from 'react';
import PropTypes from 'prop-types';
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

Page404.getInitialProps = async ({ asPath }) => {
  // TODO: move lang inside fetchContent
  const lang = asPath.split('/')[1];
  return fetchContent(null, null, lang);
};

Page404.propTypes = {
  globalConfig: PropTypes.object,
  error400: PropTypes.bool,
};

export default Page404;
