import React, { useContext } from "react";
import styled, { css } from 'styled-components';
import Image from 'next/image'
import { PrismicResponsiveImage } from '../../../../prismic/types';
import { BreakpointContext } from "../../../contexts/breakpoint/BreakpointContext";
import getDevice from "../../../helpers/getDevice";

interface PictureProps {
  image: PrismicResponsiveImage;
  className?: string;
  objectFit?: boolean;
  retinaFaktor?: number;
  noMinHeight?: boolean;
}

const Wrapper = styled.div<{
  objectFit: boolean;
  noMinHeight: boolean;
  minHeight: number;
}>`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: ${(props) => props.noMinHeight ? '0' : props.minHeight}px;

  ${(props) => props.objectFit && css`
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  `}
`;

const Picture: React.FC<PictureProps> = ({
  image,
  className,
  retinaFaktor = 1.5,
  objectFit = false,
  noMinHeight= false,
}) => {
  const breakpoint = useContext(BreakpointContext);
  const isSmartphone = getDevice(breakpoint, 'smartphone');
  const isTablet = getDevice(breakpoint, 'tablet');

  const getImageTree = () => {
    if (isSmartphone) return image.XS ?? image;
    if (isTablet) return image.MD ?? image;
    return image;
  };

  // @ts-ignore
  const width = getImageTree().dimensions?.width / retinaFaktor;
  // @ts-ignore
  const height = getImageTree().dimensions?.height / retinaFaktor;

  const imageProps = () => {
    if (objectFit) {
      return {
        src: getImageTree().url || '',
        alt: getImageTree().alt || '',
        layout: 'fill',
      };
    }
    return {
      src: getImageTree().url || '',
      alt: getImageTree().alt || '',
      width,
      height,
    }
  };

  // next/image caches images, so it is impossible to change images on resize
  return (
    <Wrapper
      className={className}
      objectFit={objectFit}
      minHeight={height}
      noMinHeight={noMinHeight}
    >
      {
        isSmartphone &&
          <>
            {/* @ts-ignore */}
            <Image {...imageProps()} />
          </>
      }
      {
        isTablet &&
          <>
            {/* @ts-ignore */}
            <Image {...imageProps()} />
          </>
      }
      {
        !isTablet && !isSmartphone &&
          <>
            {/* @ts-ignore */}
            <Image {...imageProps()} />
          </>
      }
    </Wrapper>
  );
};

export default Picture;
