import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import { lighten } from 'polished';
import { GlobalConfigContext } from '../../../contexts/globalConfig';
import { BreakpointContext } from '../../../contexts/breakpoint';
import mq from '../../../styles/mediaQueries';

const Title = styled.h1`
  color: ${(props) => (lighten(0.5, props.theme.colors.primary))};
  background-color: ${(props) => (props.active ? 'red' : 'transparent')};

  @media (${mq.mdDown}) {
    background-color: black;
    color: red;
  }
`;

const Dummy = ({ data }) => {
  const theme = useContext(ThemeContext);
  const content = useContext(GlobalConfigContext);
  const breakpoint = useContext(BreakpointContext);
  const [mounted, mount] = useState(false);
  const [clicked, toggleClick] = useState(mounted);

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
        <Title active={clicked}>Data: {data.data.display_name[0].text}</Title>
      }
      <p>BREAKPOINT IS: {breakpoint}</p>
      {
        mounted &&
        <button type="button" onClick={() => toggleClick(!clicked)}>
          Click me, my color is: {theme.colors.primary}
        </button>
      }
    </>
  );
};

Dummy.propTypes = {
  data: PropTypes.object,
};

export default Dummy;
