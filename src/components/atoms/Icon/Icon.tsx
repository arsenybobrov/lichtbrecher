import styled from 'styled-components';
import React, { useState } from 'react';
import { IconMap, IconType } from './iconMap';

export interface IconProps {
  icon: IconType;
  className?: string;
  checked?: boolean;
  isMounted?: boolean;
}

const Wrapper = styled.span`
  display: flex;
`;

const Icon: React.FC<IconProps> = ({ icon, className, checked, isMounted }) => {
  const [hovered, isHover] = useState(false);

  return (
    <Wrapper
      onMouseEnter={(): void => isHover(true)}
      onMouseLeave={(): void => isHover(false)}
    >
      {React.createElement<{
        hovered?: boolean;
        className?: string;
        checked?: boolean;
        isMounted?: boolean;
      }>(IconMap[icon] || IconMap.DEFAULT, {
        hovered,
        checked,
        isMounted,
        className,
      })}
    </Wrapper>
  );
};

export default Icon;
