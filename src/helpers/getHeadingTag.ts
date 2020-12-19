import { PrismicHeadingType } from '../../prismic/types';

type Heading = {
  [key in PrismicHeadingType]: HeadingType;
};;

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const HEADING_MAP: Heading = {
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  heading4: 'h4',
  heading5: 'h5',
  heading6: 'h6',
};

const getHeadingTag = (prismicHeadingType: PrismicHeadingType | string | null | undefined): HeadingType => {
  return HEADING_MAP[prismicHeadingType as keyof Heading];
};

export default getHeadingTag;
