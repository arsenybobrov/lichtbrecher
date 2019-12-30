import React from 'react';
import PropTypes from 'prop-types';
import Dummy from '../components/atoms/Dummy';
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
    <Dummy globalConfig={globalConfig} data={data} />
  </TemplateWrapper>
);

PageTemplate.propTypes = {
  globalConfig: PropTypes.objectOf(PropTypes.object()),
  error400: PropTypes.bool,
  data: PropTypes.objectOf(PropTypes.object()),
};

export default PageTemplate;
