import React from 'react';
import uniqueId from 'lodash/uniqueId';
import DummyHeadline, { HeadlineProps } from '../../atoms/DummyHeadline/DummyHeadline';
import DummyRichText, { RichTextElementType } from '../../atoms/DummyRichText/DummyRichText';


interface PrismicDummyContent {
 headline: Array<HeadlineProps>;
 richtext: Array<RichTextElementType>;
}

interface DummyProps {
  primary: PrismicDummyContent;
}

const Dummy: React.FC<DummyProps> = ({ primary }) => {
  const { headline, richtext } = primary;
  return (
    <>
      {headline.map((headlineProps) => <DummyHeadline {...headlineProps} key={uniqueId('headline')} />)}
      <DummyRichText content={richtext} />
    </>
  );
};

export default Dummy;
