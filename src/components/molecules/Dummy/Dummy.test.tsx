import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { headingMock } from '../../atoms/Headline/Headline.test';
import Dummy from './Dummy';

const paragraphsMock = [
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

const dummyMock = {
  primary: {
    headline: [headingMock(1)],
    richtext: paragraphsMock,
  },
};

describe('render Dummy molecule snapshot', () => {
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('renders Dummy molecule', () => {
    const tree = renderer.create(<Dummy {...dummyMock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
