const documentsMock = [
  {
    id: 'XCya9BAAADAARmVg',
    uid: 'level1',
    type: 'page',
    href:
      'https://test.cdn.prismic.io/api/v2/documents/search?ref=XCybnRAAADAARmhc&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XCya9BAAADAARmVg%22%29+%5D%5D',
    tags: ['test'],
    first_publication_date: '2019-01-02T11:07:37+0000',
    last_publication_date: '2019-01-02T11:07:37+0000',
    slugs: ['level1', 'category1'],
    linked_documents: [],
    lang: 'de-de',
    alternate_languages: [],
    data: {
      display_name: [
        {
          type: 'heading1',
          text: 'LEVEL1',
          spans: [],
        },
      ],
      category: {
        link_type: 'Document',
      },
      body: [],
    },
  },
  {
    id: 'XCybahAAADAARmd4',
    uid: 'level3',
    type: 'page',
    href:
      'https://test.cdn.prismic.io/api/v2/documents/search?ref=XCybnRAAADAARmhc&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XCybahAAADAARmd4%22%29+%5D%5D',
    tags: ['test'],
    first_publication_date: '2019-01-02T11:07:27+0000',
    last_publication_date: '2019-01-02T11:08:13+0000',
    slugs: ['level3'],
    linked_documents: [
      {
        id: 'XCybahAAADAARmd4',
        tags: ['test'],
        type: 'page',
        slug: 'level3',
        lang: 'de-de',
      },
    ],
    lang: 'de-de',
    alternate_languages: [],
    data: {
      display_name: [
        {
          type: 'heading1',
          text: ' LEVEL3',
          spans: [],
        },
      ],
      category: {
        id: 'XCybSRAAACwARmbe',
        type: 'page',
        tags: ['test'],
        slug: 'level2',
        lang: 'de-de',
        uid: 'level2',
        link_type: 'Document',
        isBroken: false,
      },
      body: [],
    },
  },
  {
    id: 'XCybSRAAACwARmbe',
    uid: 'level2',
    type: 'page',
    href:
      'https://test.cdn.prismic.io/api/v2/documents/search?ref=XCybnRAAADAARmhc&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XCybSRAAACwARmbe%22%29+%5D%5D',
    tags: ['test'],
    first_publication_date: '2019-01-02T11:07:37+0000',
    last_publication_date: '2019-01-02T11:07:37+0000',
    slugs: ['level2'],
    linked_documents: [
      {
        id: 'XCybSRAAACwARmbe',
        tags: ['test'],
        type: 'page',
        slug: 'level2',
        lang: 'de-de',
      },
    ],
    lang: 'de-de',
    alternate_languages: [],
    data: {
      display_name: [
        {
          type: 'heading1',
          text: 'LEVEL2',
          spans: [],
        },
      ],
      category: {
        id: 'XCya9BAAADAARmVg',
        type: 'page',
        tags: ['test'],
        slug: 'level1',
        lang: 'de-de',
        uid: 'level1',
        link_type: 'Document',
        isBroken: false,
      },
      body: [],
    },
  },
];

export const documentTree = [
  {
    id: 'XCya9BAAADAARmVg',
    uid: 'level1',
    type: 'page',
    category: {
      link_type: 'Document',
    },
    displayName: [
      {
        type: 'heading1',
        text: 'LEVEL1',
        spans: [],
      },
    ],
    parent: [],
  },
  {
    id: 'XCybahAAADAARmd4',
    uid: 'level3',
    type: 'page',
    category: {
      id: 'XCybSRAAACwARmbe',
      type: 'page',
      tags: ['test'],
      slug: 'level2',
      lang: 'de-de',
      uid: 'level2',
      link_type: 'Document',
      isBroken: false,
    },
    displayName: [
      {
        type: 'heading1',
        text: ' LEVEL3',
        spans: [],
      },
    ],
    parent: [
      {
        id: 'XCybSRAAACwARmbe',
        uid: 'level2',
        type: 'page',
        displayName: [
          {
            type: 'heading1',
            text: 'LEVEL2',
            spans: [],
          },
        ],
        parent: [
          {
            type: 'page',
            id: 'XCya9BAAADAARmVg',
            uid: 'level1',
            displayName: [
              {
                type: 'heading1',
                text: 'LEVEL1',
                spans: [],
              },
            ],
            parent: [],
          },
        ],
      },
    ],
  },
  {
    id: 'XCybSRAAACwARmbe',
    uid: 'level2',
    type: 'page',
    category: {
      id: 'XCya9BAAADAARmVg',
      type: 'page',
      tags: ['test'],
      slug: 'level1',
      lang: 'de-de',
      uid: 'level1',
      link_type: 'Document',
      isBroken: false,
    },
    displayName: [
      {
        type: 'heading1',
        text: 'LEVEL2',
        spans: [],
      },
    ],
    parent: [
      {
        type: 'page',
        id: 'XCya9BAAADAARmVg',
        uid: 'level1',
        displayName: [
          {
            type: 'heading1',
            text: 'LEVEL1',
            spans: [],
          },
        ],
        parent: [],
      },
    ],
  },
];

export default documentsMock;
