import React from 'react';
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

Page.getInitialProps = async ({ req }) => fetchContent(req, 'page', req.params.uid);

Page.propTypes = {
  data: PropTypes.objectOf(PropTypes.object()),
  globalConfig: PropTypes.objectOf(PropTypes.object()),
  error400: PropTypes.bool,
};

export default Page;
