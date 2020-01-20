import React from 'react';
import PropTypes from 'prop-types';
import HomepageTemplate from '../src/templates/Homepage';
import fetchContent from '../api/prismic/helper/fetchContent';
import getLanguage from '../helpers/getLanguage';

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

Index.getInitialProps = async ({ asPath }) => fetchContent('homepage', null, getLanguage(asPath));

Index.propTypes = {
  data: PropTypes.object,
  globalConfig: PropTypes.object,
  error400: PropTypes.bool,
};

export default Index;
