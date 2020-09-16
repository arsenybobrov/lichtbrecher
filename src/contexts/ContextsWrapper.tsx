import React from 'react';
import BreakpointProviderWrapper from './breakpoint/BreakpointProviderWrapper';
import { PageProps } from '../../prismic/types';
import { SharedContentProvider } from './sharedContent/SharedContentContext';
import { DocumentRelationsProvider } from './documentRelations/DocumentRelationsContext';

const ContextsWrapper: React.FC<PageProps> = ({
  documentRelations,
  fetchedSharedData,
  children,
}) => (
  <BreakpointProviderWrapper>
    <DocumentRelationsProvider value={documentRelations}>
      <SharedContentProvider value={fetchedSharedData}>
        {children}
      </SharedContentProvider>
    </DocumentRelationsProvider>
  </BreakpointProviderWrapper>
);

export default ContextsWrapper;
