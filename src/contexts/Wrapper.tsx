import React from 'react';
import { GlobalConfigProvider } from './globalConfig';
import BreakpointProviderWrapper from './breakpoint/BreakpointProviderWrapper';
import {PageProps} from '../../pageTypes/page.types';

const ContextsWrapper: React.FC<PageProps> = ({ children, globalConfig }) => (
  <GlobalConfigProvider value={globalConfig}>
    <BreakpointProviderWrapper>
      {children}
    </BreakpointProviderWrapper>
  </GlobalConfigProvider>
);

export default ContextsWrapper;
