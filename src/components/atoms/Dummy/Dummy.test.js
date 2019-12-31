import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Dummy from './index';
import DummyMock from './Dummy.mock';
import TemplateWrapper from '../../../templates/partials/Wrapper';

describe('Dummy', () => {
  it.each`
    name                                | mock
    ${'description of expected result'} | ${DummyMock}
  `('$name', ({ mock }) => {
  const tree = renderer
    .create(
      <TemplateWrapper {...mock}>
        <Dummy {...mock} />
      </TemplateWrapper>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
});
