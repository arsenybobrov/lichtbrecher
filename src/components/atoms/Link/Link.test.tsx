import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Link from './Link';
import {
  prismicExternalLinkMock,
  prismicInternalHomepageLinkMock,
  prismicInternalPageLinkMock,
} from '../../../../prismic/helper/tests/linkResolver.test';

export const NextLinkInternalPageLinkMock = {
  url: prismicInternalPageLinkMock,
  title: 'here comes the title',
  text: 'Click me',
};

export const NextLinkInternalPageLinkMockWithChildren = {
  url: prismicInternalPageLinkMock,
  title: 'here comes the title',
};

export const NextLinkInternalHomepageLinkMock = {
  url: prismicInternalHomepageLinkMock,
  title: 'here comes the title',
  text: 'Click me',
};

export const NextLinkExternalLinkMock = {
  url: prismicExternalLinkMock,
  text: 'Click me',
};

export const NextLinkExternalLinkMockBlank = {
  url: prismicExternalLinkMock,
  text: 'Click me',
  target: '_blank',
};

describe('nextLink snapshot', () => {
  it.each`
    name                                               | mock
    ${'internal Link to a page'}                       | ${NextLinkInternalPageLinkMock}
    ${'internal Link to the homepage'}                 | ${NextLinkInternalHomepageLinkMock}
    ${'external link'}                                 | ${NextLinkExternalLinkMock}
    ${'external link with target _blank'}              | ${NextLinkExternalLinkMockBlank}
  `('$name', ({ mock }) => {
  const tree = renderer.create(<Link {...mock} />).toJSON();
  expect(tree).toMatchSnapshot();
});
  it.each`
    name                                       | mock
    ${'internal Link to a page with children'} | ${NextLinkInternalPageLinkMockWithChildren}
  `('$name', ({ mock }) => {
  const tree = renderer.create(<Link {...mock}>Click me!</Link>).toJSON();
  expect(tree).toMatchSnapshot();
});
});
