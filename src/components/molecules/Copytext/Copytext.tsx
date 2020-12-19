import React, {ReactNode} from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import { Text } from '@nx-kit/text';
import { As } from '@nx-kit/styling';
import linkResolver from '../../../../prismic/helpers/linkResolver';
import htmlSerializer from '../../../../prismic/helpers/richtextHtmlSerializer';
import { PrismicRichtextObject } from '../../../../prismic/types';

interface CopytextProps {
  richtext?: Array<PrismicRichtextObject>;
  textstring?: string;
  skin?: number;
  className?: string;
  elementType?: As;
  children?: ReactNode;
}

const TextStyled = styled(Text)`
  strong {
    ${({ theme }) => theme.global.font.sourceSansBold};
  }

  a {
    ${(props) => props.theme.component.link.global};
    ${(props) => props.theme.component.link.skin.copytext};
  }
  h1 a:hover,
  h2 a:hover,
  h3 a:hover,
  h4 a:hover,
  h5 a:hover,
  h6 a:hover {
    background: none;
    color: ${(props) => props.theme.global.color.text};
  }
`;

const Copytext: React.FC<CopytextProps> = ({
  elementType,
  richtext,
  textstring,
  skin,
  className,
  children,
}) => {
  const text = richtext
    ? // @ts-ignore
      RichText.render(richtext, linkResolver, htmlSerializer)
    : textstring;
  return (
    <TextStyled elementType={elementType} className={className} skin={skin || 400}>
      {text}
      {children}
    </TextStyled>
  );
};

export default Copytext;
