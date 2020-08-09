import React from 'react';
import styled from 'styled-components';
import mq from '../../../styles/mediaQueries/mediaQueries';
import { PrismicResponsiveImage } from '../../../../prismic/types';

export interface PictureProps {
  prismicImageObject: PrismicResponsiveImage;
  className?: string;
}

const PictureStyled = styled.picture`
  width: 100%;
  height: 100%;
`;

const Picture: React.FC<PictureProps> = ({
  className, prismicImageObject,
}) => (
  <PictureStyled className={className}>
    <source media={`(${mq.lgUp})`} srcSet={prismicImageObject.url} />
    <source media={`(${mq.smUp})`} srcSet={prismicImageObject?.tablet?.url ?? prismicImageObject.url} />
    <source media={`(${mq.xs})`} srcSet={prismicImageObject?.smartphone?.url ?? prismicImageObject.url} />
    <img src={prismicImageObject.url} alt={prismicImageObject.alt} />
  </PictureStyled>
);

export default Picture;
