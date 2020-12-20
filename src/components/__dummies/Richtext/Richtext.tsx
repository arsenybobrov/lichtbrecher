import React from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import { lighten } from 'polished';
import linkResolver from '../../../../prismic/helpers/linkResolver';
import htmlSerializer from '../../../../prismic/helpers/richtextHtmlSerializer';
import { PrismicRichtextObject } from '../../../../prismic/types';

interface RichtextPrimaryProps {
  text: Array<PrismicRichtextObject>;
}

interface RichtextProps {
  primary: RichtextPrimaryProps;
}

const Wrapper = styled.div`
  h1 {
    background: ${lighten(0.2, '#FFCD64')};
    padding: 35px;
  }
`;

const Richtext: React.FC<RichtextProps> = ({
  primary,
}) => {
  // @ts-ignore
  const text = RichText.render(primary.text, linkResolver, htmlSerializer);
  return (
    <Wrapper>
      {text}
    </Wrapper>
  );
};

export default Richtext;
