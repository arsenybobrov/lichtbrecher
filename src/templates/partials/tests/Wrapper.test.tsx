import React from 'react';
import renderer from 'react-test-renderer';
import TemplateWrapper from '../Wrapper';

const Data = {
  globalConfig: {
    id: 'XgeIahIAACEARC-h',
    uid: null,
    type: 'global_config',
    href: 'https://lichtbrecher.cdn.prismic.io/api/v2/documents/search?ref=XhnmmxUAACIAIDxH&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XgeIahIAACEARC-h%22%29+%5D%5D',
    tags: [],
    first_publication_date: '2019-12-28T16:53:02+0000',
    last_publication_date: '2019-12-28T16:53:10+0000',
    slugs: [
      'globale-einstellungen',
    ],
    linked_documents: [],
    lang: 'de-de',
    alternate_languages: [
      {
        id: 'XgeLhBIAACEARD1W',
        type: 'global_config',
        lang: 'en-gb',
      },
    ],
    data: {
      display_name: [
        {
          type: 'heading1',
          text: 'Globale Einstellungen',
          spans: [],
        },
      ],
    },
  },
  data: {
    id: 'XgeHwRIAACMARCyx',
    uid: null,
    type: 'homepage',
    href: 'https://lichtbrecher.cdn.prismic.io/api/v2/documents/search?ref=XhnmmxUAACIAIDxH&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XgeHwRIAACMARCyx%22%29+%5D%5D',
    tags: [
      'homepage',
    ],
    first_publication_date: '2019-12-28T16:50:15+0000',
    last_publication_date: '2020-01-11T15:15:39+0000',
    slugs: [
      'homepage',
    ],
    linked_documents: [],
    lang: 'de-de',
    alternate_languages: [
      {
        id: 'XgeLbBIAACQARDzp',
        uid: 'homepage',
        type: 'homepage',
        lang: 'en-gb',
      },
    ],
    data: {
      display_name: [
        {
          type: 'heading1',
          text: 'Homepage',
          spans: [],
        },
      ],
      headline: [
        {
          type: 'heading1',
          text: 'Ich bin die Startseite',
          spans: [],
        },
      ],
      text: [
        {
          type: 'paragraph',
          text: 'Auch gibt es niemanden, external der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können.',
          spans: [
            {
              start: 24,
              end: 32,
              type: 'hyperlink',
              data: {
                link_type: 'Web',
                url: 'https://example.com',
                target: '_blank',
              },
            },
            {
              start: 166,
              end: 183,
              type: 'hyperlink',
              data: {
                id: 'XgeIMBIAACMARC6d',
                type: 'page',
                tags: [
                  'one',
                ],
                slug: 'page-one',
                lang: 'de-de',
                uid: 'page-one',
                link_type: 'Document',
                isBroken: false,
              },
            },
          ],
        },
      ],
      linktext: 'PAGE TWO',
      url: {
        link_type: 'Web',
        url: 'https://example.com',
        target: '_blank',
      },
    },
  },
};

const Data404 = {
  globalConfig: {
    id: 'XgeIahIAACEARC-h',
    uid: null,
    type: 'global_config',
    href: 'https://lichtbrecher.cdn.prismic.io/api/v2/documents/search?ref=XhnmmxUAACIAIDxH&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XgeIahIAACEARC-h%22%29+%5D%5D',
    tags: [],
    first_publication_date: '2019-12-28T16:53:02+0000',
    last_publication_date: '2019-12-28T16:53:10+0000',
    slugs: [
      'globale-einstellungen',
    ],
    linked_documents: [],
    lang: 'de-de',
    alternate_languages: [
      {
        id: 'XgeLhBIAACEARD1W',
        type: 'global_config',
        lang: 'en-gb',
      },
    ],
    data: {
      display_name: [
        {
          type: 'heading1',
          text: 'Globale Einstellungen',
          spans: [],
        },
      ],
    },
  },
};

const Data400 = {
  error400: true,
};

describe('templateWrapper snapshot', () => {
  it.each`
    name                     |  mock
    ${'default'}             |  ${Data}
    ${'Api is down 400'}     |  ${Data400}
    ${'Page not found 404'}  |  ${Data404}
  `('$name', ({ mock }) => {
  jest.spyOn(window, 'addEventListener').mockImplementation();
  const tree = renderer
    .create(
      <TemplateWrapper {...mock}>
        <h1>Hello world!</h1>
      </TemplateWrapper>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
});
