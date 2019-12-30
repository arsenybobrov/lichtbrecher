import React from 'react';
import Dummy from '../components/atoms/Dummy';
import TemplateWrapper from './partials/Wrapper';

const HomepageTemplate = ({
  data,
  globalConfig,
  error400,
}) => {
  return (
    <TemplateWrapper {...{
        data,
        globalConfig,
        error400,
      }}
    >
      <Dummy data={data}/>
    </TemplateWrapper>
  );
};

export default HomepageTemplate;
