import React from 'react';
import TemplateWrapper from './partials/Wrapper';
import {PageProps} from '../../pages/types/page.types';

const HomepageTemplate: React.FC<PageProps> = ({ data, globalConfig, error400}) => (
  <TemplateWrapper
    {...{
      data,
      globalConfig,
      error400,
    }}
  >
    <h1>HOMEPAGE TEMPLATE</h1>
    <br />
    <h2>DATA:</h2>
    <pre>{JSON.stringify(globalConfig, null, 2)}</pre>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </TemplateWrapper>
);

export default HomepageTemplate;
