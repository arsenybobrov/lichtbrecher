import React from 'react';

const HeadlineMap = {
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  heading4: 'h4',
  heading5: 'h5',
  heading6: 'h6',
};

export type HeadlineType = keyof typeof HeadlineMap;

export interface HeadlineProps {
  type: HeadlineType;
  text: string;
  key?: string;
}

const Headline: React.FC<HeadlineProps> = ({ type, text }) => (
  React.createElement(HeadlineMap[type], null, text)
);

export default Headline;
