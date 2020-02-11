import React from 'react';
import { GlobalConfigProvider } from './globalConfig';
import BreakpointProviderWrapper from './breakpoint/BreakpointProviderWrapper';

interface Props {
  globalConfig: {},

}

const ContextsWrapper: React.FC<Props> = ({ children, globalConfig }) => (
  <GlobalConfigProvider value={globalConfig}>
    <BreakpointProviderWrapper>
      {children}
    </BreakpointProviderWrapper>
  </GlobalConfigProvider>
);

export default ContextsWrapper;
