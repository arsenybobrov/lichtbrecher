import React from 'react';
import PrismicToolbar from '../../../thirdPartyScripts/PrismicToolbar';
import { Data } from '../../../../prismic/types';
import HeadWrapper from '../../../head/HeadWrapper';

interface TemplateWrapperProps {
  pageId: string;
  data: Data;
  serverReqUrl: string;
}

const TemplateWrapper: React.FC<TemplateWrapperProps> = ({
  pageId,
  data,
  serverReqUrl,
  children,
}) => (
  <HeadWrapper data={data} serverReqUrl={serverReqUrl}>
    <PrismicToolbar pageId={pageId} />
    {children}
  </HeadWrapper>
);

export default TemplateWrapper;
