import React, {ReactNode} from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import { Text } from '@nx-kit/text';
import { As } from '@nx-kit/styling';
import linkResolver from '../../../../prismic/helpers/linkResolver';
import htmlSerializer from '../../../../prismic/helpers/richtextHtmlSerializer';
import { PrismicRichtextObject } from '../../../../prismic/types';
import preventCodeInjection from "../../../helpers/preventCodeInjection";

interface CopytextProps {
  richtext?: Array<PrismicRichtextObject>;
  textstring?: string;
  markup?: string;
  skin?: number;
  className?: string;
  elementType?: As;
  children?: ReactNode;
}

const TextStyled = styled(Text)``;

const Copytext: React.FC<CopytextProps> = ({
  elementType,
  richtext,
  textstring,
  skin,
  markup,
  className,
  children,
}) => {
  const text = richtext
    ? // @ts-ignore
      RichText.render(richtext, linkResolver, htmlSerializer)
    : textstring;
  const safeMarkUp = markup && preventCodeInjection(markup);

  return (
    <TextStyled elementType={elementType} className={className} skin={skin || 400}>
      {text}
      {markup && <div dangerouslySetInnerHTML={{ __html: safeMarkUp || '' }} />}
      {children}
    </TextStyled>
  );
};

export default Copytext;
