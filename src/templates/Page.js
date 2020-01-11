import React from 'react';
import PropTypes from 'prop-types';
import TemplateWrapper from './partials/Wrapper';

const PageTemplate = ({
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

PageTemplate.propTypes = {
  globalConfig: PropTypes.object,
  error400: PropTypes.bool,
  data: PropTypes.object,
};

export default PageTemplate;
