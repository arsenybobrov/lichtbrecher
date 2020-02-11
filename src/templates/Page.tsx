import React from 'react';
import TemplateWrapper from './partials/Wrapper';

interface Props {
  globalConfig: {},
  error400: {},
  data: {},
}

const PageTemplate: React.FC<Props> = ({
  data,
  globalConfig,
  error400,
}) => (
  <TemplateWrapper {...{
    data,
    globalConfig,
    error400,
  }}
  >
    <h1>PAGE TEMPLATE</h1>
    <br />
    <h2>DATA:</h2>
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  </TemplateWrapper>
);

export default PageTemplate;
