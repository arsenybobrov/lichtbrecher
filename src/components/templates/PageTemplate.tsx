import React from 'react';
import get from 'lodash/get';
import ComponentsRenderer from './partials/ComponentsRenderer';
import TemplateWrapper from './partials/TemplateWrapper';
import { Data } from '../../../prismic/types';

interface PageTemplateProps {
  data: Data;
  sharedData?: Data;
  serverReqUrl: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data, sharedData, serverReqUrl }) => (
  <TemplateWrapper pageId={data.id} data={data} sharedData={sharedData} serverReqUrl={serverReqUrl}>
    <main>
      <h1>You are on: &quot;{get(data, 'data.display_name[0].text', 'unknown :((')}&quot; page</h1>
      <ComponentsRenderer slices={get(data, 'data.body', [])} />
    </main>
  </TemplateWrapper>
);

export default PageTemplate;
