import React from 'react'
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

export default  StylesWrapper;
