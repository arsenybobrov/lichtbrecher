import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import DummyHeadline, { HeadlineType } from './DummyHeadline';

// eslint-disable-next-line import/prefer-default-export
export const headingMock = (level: number) => ({
  type: `heading${level}` as HeadlineType,
  text: `this is a h${level} headline`,
});

describe('nextLink snapshot', () => {
  it.each`
    name             | mock
    ${'h1 headline'} | ${headingMock(1)}
    ${'h2 headline'} | ${headingMock(2)}
    ${'h3 headline'} | ${headingMock(3)}
    ${'h4 headline'} | ${headingMock(4)}
    ${'h5 headline'} | ${headingMock(5)}
    ${'h6 headline'} | ${headingMock(6)}
  `('$name', ({ mock }) => {
  const tree = renderer.create(<DummyHeadline {...mock} />).toJSON();
  expect(tree).toMatchSnapshot();
});
});
