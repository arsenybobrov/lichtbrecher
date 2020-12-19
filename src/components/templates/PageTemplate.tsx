import React from 'react';
import get from 'lodash/get';
import ComponentsRenderer from './partials/ComponentsRenderer';
import TemplateWrapper from './partials/TemplateWrapper';
import { Data } from '../../../prismic/types';

interface PageTemplateProps {
  data: Data;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => (
  <TemplateWrapper pageId={data.id} data={data}>
    <ComponentsRenderer slices={get(data, 'data.body', [])} />
  </TemplateWrapper>
);

export default PageTemplate;
