import React from 'react';
import uniqueId from 'lodash/uniqueId';

const RichTextElementMap: Record<string, string> = {
  paragraph: 'p',
};

export interface RichTextElementType {
  type: string;
  text: string;
  key?: string;
}

interface RichTextProps {
  content: Array<RichTextElementType>;
}

const renderRichTextElement = ({ type, text, key }: RichTextElementType) => {
  if (type in RichTextElementMap) {
    return React.createElement(RichTextElementMap[type], { key }, text);
  }
  return <pre key={key}>{JSON.stringify({ type, text })}</pre>;
};

const DummyRichText: React.FC<RichTextProps> = ({ content }) => (
  <>
    {content.map((elem) => (
      renderRichTextElement({ ...elem, key: uniqueId(elem.type) })
    ))}
  </>
);

export default DummyRichText;
