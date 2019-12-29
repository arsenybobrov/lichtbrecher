import React from 'react';
import StylesWrapper from '../src/styles/Wrapper';
import Error404 from '../src/templates/errors/404';

const NoSuchPage = () => {
  return (
    <StylesWrapper>
      <Error404 />
    </StylesWrapper>
  );
};

export default NoSuchPage;
