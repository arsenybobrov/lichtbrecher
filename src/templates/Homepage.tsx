import React from 'react';
import PropTypes from 'prop-types';
import TemplateWrapper from './partials/Wrapper';

const HomepageTemplate = ({
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
    <h1>HOMEPAGE TEMPLATE</h1>
    <br />
    <h2>DATA:</h2>
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  </TemplateWrapper>
);

HomepageTemplate.propTypes = {
  globalConfig: PropTypes.object,
  error400: PropTypes.bool,
  data: PropTypes.object,
};

export default HomepageTemplate;
