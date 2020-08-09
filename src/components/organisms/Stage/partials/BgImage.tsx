import React from 'react';
import styled from 'styled-components';
import { PrismicResponsiveImage } from '../../../../../prismic/types';
import Picture from '../../../atoms/Picture/Picture';
import { ImagePosition } from '../Stage.types';

interface BgImageProps {
  image: PrismicResponsiveImage;
  opacity: number;
  position: ImagePosition;
}

const Wrapper = styled.div<{ opacity: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: ${(props): number => props.opacity / 100};
`;

const StyledPicture = styled(Picture)<{ position: string }>`
  img {
    object-fit: cover;
    object-position: ${(props): string => props.position};
    width: 100%;
    height: 100%;
  }
`;

const BgImage: React.FC<BgImageProps> = ({
  image,
  opacity,
  position,
}) => (
  <Wrapper opacity={opacity}>
    <StyledPicture prismicImageObject={image} position={position} />
  </Wrapper>
);

export default BgImage;
