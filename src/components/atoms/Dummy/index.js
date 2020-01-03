import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import get from 'lodash/get';
import { RichText } from 'prismic-reactjs';
import styled, { ThemeContext } from 'styled-components';
import { lighten } from 'polished';
import { GlobalConfigContext } from '../../../contexts/globalConfig';
import { BreakpointContext } from '../../../contexts/breakpoint';
import mq from '../../../styles/mediaQueries';
import { hrefResolver, linkResolver } from '../../../../api/prismic/linkResolver';

const Title = styled.h1`
  color: ${(props) => (lighten(0.5, props.theme.colors.primary))};
  background-color: ${(props) => (props.active ? 'red' : 'transparent')};

  @media (${mq.mdDown}) {
    background-color: black;
    color: white;
  }
`;

const Dummy = ({ data }) => {
  const theme = useContext(ThemeContext);
  const content = useContext(GlobalConfigContext);
  const breakpoint = useContext(BreakpointContext);
  const [mounted, mount] = useState(false);
  const [clicked, toggleClick] = useState(mounted);
  const richtText = RichText.render(data.data.text, linkResolver);

  useEffect(() => {
    setTimeout(() => {
      mount(true);
    }, 3000);
  }, []);

  return (
    <>
      {
        content &&
        <Title active={clicked}>Global: {content.data.display_name[0].text}</Title>
      }
      {
        data &&
        <>
          <Title active={clicked}>Page: {data.data.display_name[0].text}</Title>
          <Title active={clicked}>Text: {richtText}</Title>
        </>
      }
      <p>BREAKPOINT IS: {breakpoint}</p>
      {
        mounted &&
        <button type="button" onClick={() => toggleClick(!clicked)}>
          Click me, my text color is: {theme.colors.primary}
        </button>
      }
      <br />
      <br />
      {
        get(data, 'data.url', null) &&
        <Link as={hrefResolver(get(data, 'data.url', null))} href="[page]">
          <a>{get(data, 'data.linktext', 'default text')}</a>
        </Link>
      }
    </>
  );
};

Dummy.propTypes = {
  data: PropTypes.object,
};

export default Dummy;
