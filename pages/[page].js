import React from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
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

Page.getInitialProps = async ({ asPath }) => {
  // TODO: maybe move uid inside fetchContent?
  const uid = asPath.substr(asPath.lastIndexOf('/') + 1);
  // TODO: move lang inside fetchContent
  const lang = asPath.split('/')[1] !== uid ? asPath.split('/')[1] : null;
  return fetchContent('page', uid, lang);
};

Page.propTypes = {
  data: PropTypes.object,
  globalConfig: PropTypes.object,
  error400: PropTypes.bool,
};

export default Page;
