import React from 'react';
import { ThemeProvider } from 'styled-components';
import BasicCSS from './css/BasicCSS';
import FontsCSS from './css/FontsCSS';
import defaultTheme from '../themes/default';

const StylesWrapper: React.FC = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <BasicCSS />
    <FontsCSS />
    {children}
  </ThemeProvider>
);

export default StylesWrapper;
