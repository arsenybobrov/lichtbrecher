import React from 'react';
import PropTypes from 'prop-types';
import { GlobalConfigProvider } from './globalConfig';
import BreakpointProviderWrapper from './breakpoint/BreakpointProviderWrapper';

const ContextsWrapper = ({ children, globalConfig }) => (
  <GlobalConfigProvider value={globalConfig}>
    <BreakpointProviderWrapper>
      {children}
    </BreakpointProviderWrapper>
  </GlobalConfigProvider>
);

ContextsWrapper.propTypes = {
  children: PropTypes.node,
  globalConfig: PropTypes.object,
};

export default ContextsWrapper;
