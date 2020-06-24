import React from 'react';
import BreakpointProviderWrapper from './breakpoint/BreakpointProviderWrapper';
import { PageProps } from '../../prismic/types';
import { SharedContentProvider } from './sharedContent/SharedContentContext';
import { DocumentRelationsProvider } from './documentRelations/DocumentRelationsContext';

const ContextsWrapper: React.FC<PageProps> = ({ children, sharedData, documentRelations }) => (
  <DocumentRelationsProvider value={documentRelations}>
    <SharedContentProvider value={sharedData}>
      <BreakpointProviderWrapper>
        {children}
      </BreakpointProviderWrapper>
    </SharedContentProvider>
  </DocumentRelationsProvider>
);

export default ContextsWrapper;
