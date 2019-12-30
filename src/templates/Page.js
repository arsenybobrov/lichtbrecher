import React from 'react';
import Dummy from '../components/atoms/Dummy';
import TemplateWrapper from './partials/Wrapper';

const PageTemplate = ({
  data,
  globalConfig,
  error400,
}) => {
  return(
    <TemplateWrapper {...{
      data,
      globalConfig,
      error400,
    }}>
      <Dummy globalConfig={globalConfig} data={data} />
    </TemplateWrapper>
  );
};

export default PageTemplate;
