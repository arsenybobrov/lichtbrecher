import React from 'react';
import uniqueId from 'lodash/uniqueId';
import Headline, { HeadlineProps } from '../../atoms/Headline/Headline';

interface PrismicDummyContent {
 headline: Array<HeadlineProps>;
 richtext: Array<RichTextElementType>;
}

interface DummyProps {
  primary: PrismicDummyContent;
}

// the Dummy component can only render paragraphs so far
const RichTextElementMap: Record<string, string> = {
  paragraph: 'p',
};

export interface RichTextElementType {
  type: string;
  text: string;
  key?: string;
}

const renderRichTextElement = ({ type, text, key }: RichTextElementType) => {
  if (type in RichTextElementMap) {
    return React.createElement(RichTextElementMap[type], { key }, text);
  }
  return <pre key={key}>{JSON.stringify({ type, text })}</pre>;
};

const Dummy: React.FC<DummyProps> = ({ primary }) => {
  const { headline, richtext } = primary;
  return (
    <>
      {headline.map((headlineProps) => <Headline {...headlineProps} key={uniqueId('headline')} />)}
      {richtext.map((elem) => (
        renderRichTextElement({ ...elem, key: uniqueId(elem.type) })
      ))}
    </>
  );
};

export default Dummy;
