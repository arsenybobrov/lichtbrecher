import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { StageProps } from './Stage.types';
import BgImage from './partials/BgImage';
import mq from '../../../styles/mediaQueries/mediaQueries';
import StageNavigation from './partials/StageNavigation';

const Wrapper = styled.div<{ bgColor: string; color: string }>`
  position: relative;
  background-color: ${(props): string => props.bgColor};
  color: ${(props): string => props.color};
  width: 100vw;
  min-height: 100vh;
`;

const Blocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

const Block = styled.div<{ width: number; order: number }>`
  width: 100%;
  order: ${(props): number => props.order};

  @media (${mq.lgUp}) {
    width: ${(props): number => props.width}%;
  }
`;

const StageContent = styled.div`
  position: relative;
  z-index: 2;
`;

const Stage: React.FC<StageProps> = ({
  primary,
  items,
}) => {
  const theme = useContext(ThemeContext);
  const {
    background_color,
    font_color,
    background_image,
    background_image_opacity,
    background_image_position,
    change_position,
  } = primary;

  return (
    <Wrapper
      bgColor={background_color || theme.colors.default}
      color={font_color || theme.colors.primary}
    >
      {
        background_image?.url &&
        <BgImage
          image={background_image}
          opacity={background_image_opacity || 100}
          position={background_image_position}
        />
      }
      <StageContent>
        {
          items && items.length >= 1 &&
          <StageNavigation items={items} />
        }
        <Blocks>
          <Block width={50} order={change_position ? 2 : 1}>
            initialy left
          </Block>
          <Block width={50} order={change_position ? 1 : 2}>
            initialy right
          </Block>
        </Blocks>
      </StageContent>
    </Wrapper>
  );
};

export default Stage;
