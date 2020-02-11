import React from 'react';
import Error400 from '../errors/400';
import Error404Template from '../errors/404';
import StylesWrapper from '../../styles/Wrapper';
import ContextsWrapper from '../../contexts/Wrapper';
import HeadWrapper from '../../head/Wrapper';

interface Props {
  globalConfig: {},
  error400: {},
  data: {},
}

const TemplateWrapper:React.FC<Props> = ({
  children,
  globalConfig,
  error400,
  data,
}) => (
  <ContextsWrapper globalConfig={globalConfig}>
    <HeadWrapper>
      <StylesWrapper>
        { error400 && <Error400 /> }
        { !error400 && !data && <Error404Template /> }
        { !error400 && data && children }
      </StylesWrapper>
    </HeadWrapper>
  </ContextsWrapper>
);

export default TemplateWrapper;
