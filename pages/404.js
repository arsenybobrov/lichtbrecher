import React from 'react';
import PropTypes from 'prop-types';
import fetchContent from '../api/prismic/helper/fetchContent';
import PageTemplate from '../src/templates/Page';
import getLanguage from '../helpers/getLanguage';

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

Page404.getInitialProps = async ({ asPath }) => fetchContent(null, null, getLanguage(asPath));

Page404.propTypes = {
  globalConfig: PropTypes.object,
  error400: PropTypes.bool,
};

export default Page404;
