import React from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import PageTemplate from '../src/templates/Page';
import fetchContent from '../api/prismic/helper/fetchContent';
import getLanguage from '../helpers/getLanguage';

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

Page.getInitialProps = async ({ asPath }) => {
  const uid = asPath.substr(asPath.lastIndexOf('/') + 1);
  return fetchContent('page', uid, getLanguage(asPath));
};

Page.propTypes = {
  data: PropTypes.object,
  globalConfig: PropTypes.object,
  error400: PropTypes.bool,
};

export default Page;
