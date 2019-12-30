import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import { lighten } from 'polished';

const Title = styled.h1`
  color: ${(props) => (lighten(0.5, props.theme.colors.primary))};
  background-color: ${(props) => (props.active ? 'red' : 'transparent')};
`;

const Dummy = ({ globalConfig, data }) => {
  const theme = useContext(ThemeContext);
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
        globalConfig &&
        <Title active={clicked}>Global: {globalConfig.data.display_name[0].text}</Title>
      }
      {data && <Title active={clicked}>Data: {data.data.display_name[0].text}</Title>}
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
  globalConfig: PropTypes.objectOf(PropTypes.object()),
  data: PropTypes.objectOf(PropTypes.object()),
};

export default Dummy;
