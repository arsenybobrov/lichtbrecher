import React from 'react';
import BasicCSS from './css/BasicCSS';
import FontsCSS from './css/FontsCSS';

const StylesWrapper: React.FC = ({ children }) => (
  <>
    <BasicCSS />
    <FontsCSS />
    {children}
  </>
);

export default StylesWrapper;
