import React from 'react';
import { PlayState, Tween } from 'react-gsap';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

type Props = {
  checked?: boolean;
  isMounted?: boolean;
};

const SVG = styled.svg`
  display: block;
  width: 22px;
  height: 17px;
`;

const TopRect = styled.path`
  opacity: 1;
`;

const BottomRect = styled.path`
  opacity: 1;
`;

const CenterRect = styled.path<{ checked: boolean }>`
  opacity: 0;
  transition: opacity .25s ease-out;

  ${(props): false | FlattenSimpleInterpolation =>
    !props.checked &&
    css`
      opacity: 1;
    `}
`;

const HamburgerAnimatedIcon: React.FC<Props> = ({
  checked = false,
  isMounted = false,
}) => {
  const playState = (): PlayState => {
    if (isMounted) {
      return checked ? PlayState.play : PlayState.reverse;
    }
    return PlayState.pause;
  };

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
    >
      <Tween
        to={{ attr: { d: 'M25.607 4.393 L4.393 25.607' } }}
        playState={playState()}
        duration={0.3}
      >
        <TopRect d="M30 5 L0 5" strokeWidth="4" stroke="currentColor" />
      </Tween>
      <CenterRect
        checked={checked}
        d="M0 15 h30"
        strokeWidth="4"
        stroke="currentColor"
      />
      <Tween
        to={{ attr: { d: 'M25.607 25.607 L4.393 4.393' } }}
        playState={playState()}
        duration={0.3}
      >
        <BottomRect d="M30 25 L0 25" strokeWidth="4" stroke="currentColor" />
      </Tween>
    </SVG>
  );
};

export default HamburgerAnimatedIcon;
