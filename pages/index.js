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

Index.getInitialProps = async ({ asPath }) => {
  // TODO: move lang inside fetchContent
  const lang = asPath.split('/')[1];
  return fetchContent('homepage', null, lang);
};

Index.propTypes = {
  data: PropTypes.object,
  globalConfig: PropTypes.object,
  error400: PropTypes.bool,
};

export default Index;
