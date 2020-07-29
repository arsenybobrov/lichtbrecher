import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import DummyRichText from './DummyRichText';

// eslint-disable-next-line import/prefer-default-export
export const paragraphsMock = [
  {
    type: 'paragraph',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    type: 'paragraph',
    text: 'Aliquam dui turpis, ultricies quis semper vel, facilisis in leo.',
  },
  {
    type: 'paragraph',
    text: 'In aliquet orci et egestas sagittis.',
  },
  {
    type: 'paragraph',
    text:
      'Phasellus pretium, elit ac pellentesque porta, lacus sapien laoreet neque, nec bibendum odio leo sollicitudin tellus.',
  },
];

const listMock = [
  {
    type: 'list-item',
    text: 'first',
  },
  {
    type: 'list-item',
    text: 'second',
  },
  {
    type: 'list-item',
    text: 'third',
  },
];

describe('nextLink snapshot', () => {
  it.each`
    name                              | mock
    ${'RichText with paragraphs'}     | ${paragraphsMock}
    ${'Richtext with unordered list'} | ${listMock}
  `('$name', ({ mock }) => {
  const tree = renderer.create(<DummyRichText content={mock} />).toJSON();
  expect(tree).toMatchSnapshot();
});
});
