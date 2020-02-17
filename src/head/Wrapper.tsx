import React from 'react';
import Meta from './meta';

const HeadWrapper: React.FC = ({ children }) => (
  <>
    <Meta />
    { children }
  </>
);

export default HeadWrapper;
