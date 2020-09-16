import React from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
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
  .richtext-p {
    line-height: 1.5;
    margin-top: 25px;
    color: #666;
  }
`;

const Richtext: React.FC<RichtextProps> = ({
  primary,
}) => {
  const text = RichText.render(primary.text, linkResolver, htmlSerializer);
  return (
    <Wrapper>
      {text}
    </Wrapper>
  );
};

export default Richtext;
