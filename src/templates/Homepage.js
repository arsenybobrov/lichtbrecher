import React from 'react';
import PropTypes from 'prop-types';
import Dummy from '../components/atoms/Dummy';
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
    <Dummy data={data} />
  </TemplateWrapper>
);

HomepageTemplate.propTypes = {
  globalConfig: PropTypes.object,
  error400: PropTypes.bool,
  data: PropTypes.object,
};

export default HomepageTemplate;
