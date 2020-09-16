import {
  PrismicExternalLink,
  PrismicLink,
  PrismicResponsiveImage,
  PrismicRichtextObject,
} from '../../../../prismic/types';

export type ImagePosition =
  'top left' |
  'top right' |
  'top center' |
  'bottom left' |
  'bottom right' |
  'bottom center'|
  'center left' |
  'center right' |
  'center center';


interface StagePrimaryProps {
  background_color?: string;
  font_color?: string;
  background_image?: PrismicResponsiveImage;
  background_image_opacity?: number;
  background_image_position: ImagePosition;
  change_position: boolean;
  text_block_1: Array<PrismicRichtextObject>;
  image_1: PrismicResponsiveImage;
  text_block_2: Array<PrismicRichtextObject>;
  image_2: PrismicResponsiveImage;
}

export interface StageItemProps {
  sub_navigation_link_text?: string;
  sub_navigation_link?: PrismicExternalLink | PrismicLink;
  sub_navigation_link_title?: string;
}

export interface StageProps {
  primary: StagePrimaryProps;
  items: Array<StageItemProps>;
}
