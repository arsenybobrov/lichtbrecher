import React from 'react';
import get from 'lodash/get';
import ComponentsRenderer from './partials/ComponentsRenderer';
import TemplateWrapper from './partials/TemplateWrapper';
import { Data } from '../../../prismic/types';
import Link from '../atoms/Link/Link';

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
      <h1>You are on: {get(data, 'data.display_name[0].text', 'unknown :((')}</h1>
      <Link url={data.data.url} title="click me">Click me!</Link>
      <ComponentsRenderer slices={get(data, 'data.body', [])} />
    </main>
  </TemplateWrapper>
);

export default PageTemplate;
