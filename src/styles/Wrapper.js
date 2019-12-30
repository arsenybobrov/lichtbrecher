import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../themes/default';
import BasicCSS from './BasicCSS';
import FontsCSS from './FontsCSS';

const StylesWrapper = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <>
      <BasicCSS />
      <FontsCSS />
      {children}
    </>
  </ThemeProvider>
);

StylesWrapper.propTypes = {
  children: PropTypes.element,
};

export default StylesWrapper;
