import React from 'react';
import Error400 from '../errors/400';
import Error404Template from '../errors/404';
import StylesWrapper from '../../styles/Wrapper';

const TemplateWrapper = ({
  children,
  globalConfig,
  error400,
  data,
}) => {
  return(
    <StylesWrapper>
      { error400 && <Error400 /> }
      { !error400 && !data && <Error404Template globalConfig={globalConfig} /> }
      { !error400 && data && children }
    </StylesWrapper>
  );
};

export default TemplateWrapper;
