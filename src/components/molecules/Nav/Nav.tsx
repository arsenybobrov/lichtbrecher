import React from 'react';
import styled from 'styled-components';
import flatNavToNestedNavConverter from '../../../helpers/flatNavToNestedNavConverter';
import { Data } from '../../../../prismic/types';
import createNavListElm from './helpers/createNavListElm';

interface NavProps {
  nav: Data;
}

const NavWrapper = styled.nav`
  padding: 15px;
  border: 1px solid lightgray;
  margin: 35px 0;

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  ul li ul {
    display: block;
  }

  a {
    color: ${(props): string => props.theme.colors.default};
    background-color: #990000;
    transition: opacity .25s ease-out;

    &:hover {
      opacity: .5;
    }
  }

  ul li ul li {
    a {
      color: ${(props): string => props.theme.colors.default};
      background-color: #000;
    }
  }

  ul li ul li ul li {
    a {
      color: ${(props): string => props.theme.colors.default};
      background-color: yellowgreen;
    }
  }

  li {
    margin: 15px 45px 15px 0;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Nav: React.FC<NavProps> = ({
  nav,
}) => {
  const navTree = flatNavToNestedNavConverter(nav.data.body);
  return (
    <NavWrapper>
      <ul>
        { createNavListElm(navTree) }
      </ul>
    </NavWrapper>
  );
};

export default Nav;
