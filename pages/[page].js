import React from 'react';
import PropTypes from 'prop-types';
import PageTemplate from '../src/templates/Page';
import fetchContent from '../api/prismic/helper/fetchContent';

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

Page.getInitialProps = async ({ asPath, query }) => {
  const uid = asPath.substr(asPath.lastIndexOf('/') + 1);
  return fetchContent('page', uid, query);
};

Page.propTypes = {
  data: PropTypes.object,
  globalConfig: PropTypes.object,
  error400: PropTypes.bool,
};

export default Page;
