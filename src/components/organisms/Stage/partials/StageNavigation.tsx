import React from 'react';
import styled from 'styled-components';
import uniqueId from 'lodash/uniqueId';
import { StageItemProps } from '../Stage.types';
import Link from '../../../atoms/Link/Link';

interface StageNavigationProps {
  items: Array<StageItemProps>;
}

const Wrapper = styled.ul``;

const StageNavigation: React.FC<StageNavigationProps> = ({
  items,
}) => (
  <Wrapper>
    {items.map((item) => {
      if (item.sub_navigation_link) {
        return (
          <li key={`stageNav_${uniqueId}`}>
            <Link
              url={item.sub_navigation_link}
              title={item.sub_navigation_link_title || item.sub_navigation_link_text}
            >
              {item.sub_navigation_link_text}
            </Link>
          </li>
        );
      }
      return false;
    })}
  </Wrapper>
);

export default StageNavigation;
