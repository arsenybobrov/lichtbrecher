import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { headingMock } from '../../atoms/DummyHeadline/DummyHeadline.test';
import { paragraphsMock } from '../../atoms/DummyRichText/DummyRichText.test';
import Dummy from './Dummy';

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
