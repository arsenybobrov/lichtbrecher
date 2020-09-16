import React from 'react';
import BreakpointProviderWrapper from './breakpoint/BreakpointProviderWrapper';
import { PageProps } from '../../prismic/types';
import { SharedContentProvider } from './sharedContent/SharedContentContext';

const ContextsWrapper: React.FC<PageProps> = ({ children, sharedData }) => (
  <SharedContentProvider value={sharedData}>
    <BreakpointProviderWrapper>
      {children}
    </BreakpointProviderWrapper>
  </SharedContentProvider>
);

export default ContextsWrapper;
