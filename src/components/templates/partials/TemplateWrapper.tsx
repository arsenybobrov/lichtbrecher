import React from 'react';
import PrismicToolbar from '../../../thirdPartyScripts/PrismicToolbar';
import { Data } from '../../../../prismic/types';
import HeadWrapper from '../../../head/HeadWrapper';

interface TemplateWrapperProps {
  pageId: string;
  data: Data;
}

const TemplateWrapper: React.FC<TemplateWrapperProps> = ({
  pageId,
  data,
  children,
}) => (
  <HeadWrapper data={data}>
    <PrismicToolbar pageId={pageId} />
    {children}
  </HeadWrapper>
);

export default TemplateWrapper;
