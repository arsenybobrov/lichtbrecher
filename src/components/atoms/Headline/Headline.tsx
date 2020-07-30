import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1``;
const StyledH2 = styled.h2``;
const StyledH3 = styled.h3``;
const StyledH4 = styled.h4``;
const StyledH5 = styled.h5``;
const StyledH6 = styled.h6``;

const HeadlineMap = {
  heading1: StyledH1,
  heading2: StyledH2,
  heading3: StyledH3,
  heading4: StyledH4,
  heading5: StyledH5,
  heading6: StyledH6,
};

export type HeadlineType = keyof typeof HeadlineMap;

export interface HeadlineProps {
  type: HeadlineType;
  text: string;
  className?: string;
}

const Headline: React.FC<HeadlineProps> = ({ type, text, className }) => (
  React.createElement(HeadlineMap[type], { className }, text)
);

export default Headline;
