import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { Flex } from '@nx-kit/flex';
import {As, media} from '@nx-kit/styling';
import getSpacing from '../../organisms/CmsElmtWrapper/helpers/getSpacing';
import { BreakpointContext } from '../../../contexts/breakpoint/BreakpointContext';
import getDevice from '../../../helpers/getDevice';

interface ContainerProps {
  background?: string;
  nextSlice?: string;
  sliceName?: string;
  elementType?: As;
  className?: string;
  outsideGridRight?: any;
  outsideGridLeft?: any;
}

const Wrapper = styled.div<{
  background?: string;
  spacing: number;
  sliceName: string;
}>`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  padding: 0 ${(props) => props.theme.grid.gap.xs}px;
  display: flex;
  flex-wrap: wrap;

  ${(props) =>
    props.background &&
    css`
      background-color: ${props.background};
    `};
  ${(props) =>
    props.sliceName === 'share_buttons' &&
    css`
      margin-top: ${props.spacing}px;
    `};
  ${(props) =>
    props.sliceName === 'header_distance_helper' &&
    css`
      height: ${props.spacing}px;
    `};

  ${media('md')} {
    padding: 0;
  }
`;

export const colsAmount = 12;
export const containerOffsetLeftMd = 1;
export const containerOffsetLeftXxl = 2;

const Container: React.FC<ContainerProps> = ({
  background,
  nextSlice,
  sliceName,
  elementType,
  children,
  className,
  outsideGridRight,
  outsideGridLeft,
}) => {
  const breakpoint = useContext(BreakpointContext);
  const spacingBreakpoint = getDevice(breakpoint, 'smartphone') ? 'xs' : 'xl';

  const getMainOffset = () => {
    if (outsideGridLeft) {
      return undefined;
    }
    return { md: containerOffsetLeftMd / colsAmount, xxl: containerOffsetLeftXxl / colsAmount };
  };

  return (
    // @ts-ignore
    <Wrapper
      as={elementType}
      background={background}
      spacing={getSpacing(spacingBreakpoint, sliceName || '', nextSlice)}
      sliceName={sliceName}
      className={className}
    >
      {outsideGridLeft && (
        <Flex
          justifyContent="flex-end"
          col={{ md: containerOffsetLeftMd / colsAmount, xxl: containerOffsetLeftXxl / colsAmount }}
        >
          {outsideGridLeft}
        </Flex>
      )}
      <Flex
        colOffset={getMainOffset()}
        col={{
          md: (colsAmount - containerOffsetLeftMd * 2) / colsAmount,
          xxl: (colsAmount - containerOffsetLeftXxl * 2) / colsAmount,
        }}
        flexWrap="wrap"
      >
        {children}
      </Flex>
      {outsideGridRight && (
        <Flex
          justifyContent="flex-start"
          col={{ md: containerOffsetLeftMd / colsAmount, xxl: containerOffsetLeftXxl / colsAmount }}
        >
          {outsideGridRight}
        </Flex>
      )}
    </Wrapper>
  );
};

export default Container;
