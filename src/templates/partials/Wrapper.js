import React from 'react';
import PropTypes from 'prop-types';
import Error400 from '../errors/400';
import Error404Template from '../errors/404';
import StylesWrapper from '../../styles/Wrapper';

const TemplateWrapper = ({
  children,
  globalConfig,
  error400,
  data,
}) => (
  <StylesWrapper>
    { error400 && <Error400 /> }
    { !error400 && !data && <Error404Template globalConfig={globalConfig} /> }
    { !error400 && data && children }
  </StylesWrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.node,
  globalConfig: PropTypes.object,
  error400: PropTypes.bool,
  data: PropTypes.object,
};

export default TemplateWrapper;
