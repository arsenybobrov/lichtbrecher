import React from 'react';
import uniqueId from 'lodash/uniqueId';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import Headline, { HeadlineProps } from '../../atoms/Headline/Headline';
import linkResolver from '../../../../prismic/helper/linkResolver';
import htmlSerializer from '../../../../prismic/helper/richtextHtmlSerializer';
import { PrismicRichtextObject } from '../../../../prismic/types';

interface PrismicDummyContent {
 headline: Array<HeadlineProps>;
 richtext: Array<PrismicRichtextObject>;
}

interface DummyProps {
  primary: PrismicDummyContent;
}

const StyledHeadline = styled(Headline)`
  font-size: 50px;
  color: green;
`;

const StyledDiv = styled.div`
  color: #333;
`;

const Dummy: React.FC<DummyProps> = ({ primary }) => {
  const { headline, richtext } = primary;
  const richtText = RichText.render(richtext, linkResolver, htmlSerializer);
  return (
    <>
      <StyledHeadline {...headline[0]} key={uniqueId('headline')} />
      <br />
      <StyledDiv>{richtText}</StyledDiv>
    </>
  );
};

export default Dummy;
