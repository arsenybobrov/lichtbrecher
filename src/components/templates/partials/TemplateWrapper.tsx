import React from 'react';
import PrismicToolbar from '../../../thirdPartyScripts/PrismicToolbar';
import StylesWrapper from '../../../styles/StylesWrapper';
import ContextsWrapper from '../../../contexts/ContextsWrapper';
import { Data } from '../../../../prismic/types';
import HeadWrapper from '../../../head/HeadWrapper';

interface TemplateWrapperProps {
  pageId: string;
  data: Data;
  sharedData?: Data;
  serverReqUrl: string;
  documentRelations?: any;
}

const TemplateWrapper: React.FC<TemplateWrapperProps> = ({
  pageId,
  data,
  sharedData,
  serverReqUrl,
  documentRelations,
  children,
}) => (
  <ContextsWrapper sharedData={sharedData} documentRelations={documentRelations}>
    <StylesWrapper>
      <HeadWrapper data={data} serverReqUrl={serverReqUrl}>
        <PrismicToolbar pageId={pageId} />
        {children}
      </HeadWrapper>
    </StylesWrapper>
  </ContextsWrapper>
);

export default TemplateWrapper;
