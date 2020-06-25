import React from 'react';
import get from 'lodash/get';
import ComponentsRenderer from './partials/ComponentsRenderer';
import TemplateWrapper from './partials/TemplateWrapper';
import { Data } from '../../../prismic/types';

interface PageTemplateProps {
  data: Data;
  sharedData?: Data;
  serverReqUrl: string;
  documentRelations?: any;
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  data,
  sharedData,
  serverReqUrl,
  documentRelations,
}) => (
  <TemplateWrapper
    pageId={data.id}
    data={data}
    sharedData={sharedData}
    serverReqUrl={serverReqUrl}
    documentRelations={documentRelations}
  >
    <main>
      <ComponentsRenderer slices={get(data, 'data.body', [])} />
    </main>
  </TemplateWrapper>
);

export default PageTemplate;
