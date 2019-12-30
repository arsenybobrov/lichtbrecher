import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Dummy from './index';
import DummyMock from './Dummy.mock';
import StylesWrapper from '../../../styles/Wrapper';

describe('Dummy', () => {
  it.each`
    name                                | mock
    ${'description of expected result'} | ${DummyMock}
  `('$name', ({ mock }) => {
  const tree = renderer
    .create(
      <StylesWrapper>
        <Dummy {...mock} />
      </StylesWrapper>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
});
