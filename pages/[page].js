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

Page.getInitialProps = async ({ req }) => fetchContent('page', get(req, 'params.uid', null));

Page.propTypes = {
  data: PropTypes.object,
  globalConfig: PropTypes.object,
  error400: PropTypes.bool,
};

export default Page;
