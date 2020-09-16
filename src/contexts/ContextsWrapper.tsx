import React from 'react';
import BreakpointProviderWrapper from './breakpoint/BreakpointProviderWrapper';
import { PageProps } from '../../prismic/types';
import { SharedContentProvider } from './sharedContent/SharedContentContext';
import { DocumentRelationsProvider } from './documentRelations/DocumentRelationsContext';
import { ServerReqUrlProvider } from './serverReqUrl/ServerReqUrlContext';

const ContextsWrapper: React.FC<PageProps> = ({
  documentRelations,
  fetchedSharedData,
  serverReqUrl,
  children,
}) => (
  <BreakpointProviderWrapper>
    <ServerReqUrlProvider value={serverReqUrl || ''}>
      <DocumentRelationsProvider value={documentRelations}>
        <SharedContentProvider value={fetchedSharedData}>
          {children}
        </SharedContentProvider>
      </DocumentRelationsProvider>

    </ServerReqUrlProvider>
  </BreakpointProviderWrapper>
);

export default ContextsWrapper;
