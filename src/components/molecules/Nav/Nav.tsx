import React from 'react';
import styled from 'styled-components';
import { Flex } from '@nx-kit/flex';
import flatNavToNestedNavConverter from '../../../helpers/flatNavToNestedNavConverter';
import { Data } from '../../../../prismic/types';
import createNavListElm from './helpers/createNavListElm';
import AccordionItem from '../../organisms/Accordion/partials/AccordionItem';
import Link from '../../atoms/Link/Link';

interface NavProps {
  nav: Data;
  className?: string;
  showActive?: boolean;
  isAccordion?: boolean;
  initialOpenedItem?: number;
}

const NavWrapper = styled.nav`
  div[class^='AccordionItem__Description'] {
    position: relative;
    ${(props) => props.theme.component.link.skin.primary};

    &:before {
      content: '';
      height: 0;
    }

    &:hover {
      color: ${(props) => props.theme.global.color.secondary800};
    }
  }

  div[class^='AccordionItem__Content'] {
    padding-top: 2px;
  }
`;

const StyledLink = styled(Link)`
  margin-top: 22px;

  &:first-of-type {
    margin-top: 0;
  }

  &:before {
    content: '';
    height: 0;
  }
`;

const Nav: React.FC<NavProps> = ({
  nav,
  className,
  isAccordion,
  initialOpenedItem,
  showActive,
}) => {
  const navTree = flatNavToNestedNavConverter(nav.data.body);

  return (
    <NavWrapper className={className}>
      {!isAccordion && <ul>{createNavListElm(navTree, showActive)}</ul>}
      {isAccordion &&
        navTree.map((item, idx) => (
          <AccordionItem
            key={item.id}
            description={item?.data?.primary?.link_text ?? '...'}
            initialOpened={idx === initialOpenedItem}
          >
            <Flex flexDirection="column">
              {item.children?.map((link) => (
                <StyledLink
                  key={link?.data?.primary?.link_text}
                  text={link?.data?.primary?.link_text ?? '...'}
                  url={link?.data?.primary?.nav_link}
                  title={link?.data?.primary?.link_title ?? '...'}
                  skin="primary700"
                />
              ))}
            </Flex>
          </AccordionItem>
        ))}
    </NavWrapper>
  );
};

export default Nav;
