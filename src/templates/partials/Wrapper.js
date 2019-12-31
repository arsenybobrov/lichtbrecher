import React from 'react';
import PropTypes from 'prop-types';
import Error400 from '../errors/400';
import Error404Template from '../errors/404';
import StylesWrapper from '../../styles/Wrapper';
import ContextsWrapper from '../../contexts/Wrapper';

const TemplateWrapper = ({
  children,
  globalConfig,
  error400,
  data,
}) => (
  <ContextsWrapper globalConfig={globalConfig}>
    <StylesWrapper>
      { error400 && <Error400 /> }
      { !error400 && !data && <Error404Template /> }
      { !error400 && data && children }
    </StylesWrapper>
  </ContextsWrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.node,
  globalConfig: PropTypes.object,
  error400: PropTypes.bool,
  data: PropTypes.object,
};

export default TemplateWrapper;
