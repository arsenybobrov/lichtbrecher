import linkResolver from '../linkResolver';

export const prismicInternalPageLinkMock = {
  id: 'XgeIkRIAACIARDBX',
  type: 'page',
  tags: [
    'two',
  ],
  slug: 'page-two',
  lang: 'de-de',
  uid: 'page-two',
  link_type: 'Document',
  isBroken: false,
};

export const prismicInternalHomepageLinkMock = {
  id: 'XgeHwRIAACMARCyx',
  type: 'homepage',
  tags: [
    'homepage',
  ],
  slug: 'homepage',
  lang: 'de-de',
  link_type: 'Document',
  isBroken: false,
};

export const prismicExternalLinkMock = {
  link_type: 'Web',
  url: 'https://example.com',
  target: '_blank',
};

describe('prismic linkResolver', () => {
  it.each`
    name                               | inputLink                          | expected
    ${'internal Link to a page'}       | ${prismicInternalPageLinkMock}     | ${'/page-two'}
    ${'internal Link to the homepage'} | ${prismicInternalHomepageLinkMock} | ${'/'}
    ${'external Link'}                 | ${prismicExternalLinkMock}         | ${'https://example.com'}
  `('$name', ({ inputLink, expected }) => {
    expect(linkResolver(inputLink)).toStrictEqual(expected);
  });
});
