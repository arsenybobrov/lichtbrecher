import React from 'react';
import PropTypes from 'prop-types';
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

Index.getInitialProps = async ({ req }) => fetchContent(req, 'homepage');

Index.propTypes = {
  data: PropTypes.objectOf(PropTypes.object()),
  globalConfig: PropTypes.objectOf(PropTypes.object()),
  error400: PropTypes.bool,
};

export default Index;
