import flatNavToNestedNavConverter from '../flatNavToNestedNavConverter';

const NavMock = [
  {
    slice_type: 'nav_item',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      nav_link: {
        id: 'XpsYqBEAACQAjS4U',
        type: 'page',
        tags: [],
        slug: 'page',
        lang: 'de-de',
        uid: 'page',
        link_type: 'Document',
        isBroken: false,
      },
      link_text: 'Unternehmen',
      link_title: 'unternehmen',
      level: '1',
    },
  },
  {
    slice_type: 'nav_item',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      nav_link: {
        id: 'XvG_gxIAACMAy3oK',
        type: 'page',
        tags: [],
        slug: 'sub-page',
        lang: 'de-de',
        uid: 'sub-page',
        link_type: 'Document',
        isBroken: false,
      },
      link_text: 'Geschichte',
      link_title: 'Geschichte',
      level: '2',
    },
  },
  {
    slice_type: 'nav_item',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      nav_link: {
        id: 'XvG_gxIAACMAy3oK',
        type: 'page',
        tags: [],
        slug: 'sub-page',
        lang: 'de-de',
        uid: 'sub-page',
        link_type: 'Document',
        isBroken: false,
      },
      link_text: 'Jobs',
      link_title: 'Jobs',
      level: '2',
    },
  },
  {
    slice_type: 'nav_item',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      nav_link: {
        id: 'XvG_tRIAACIAy3rq',
        type: 'page',
        tags: [],
        slug: 'sub-sub-page',
        lang: 'de-de',
        uid: 'sub-sub-page',
        link_type: 'Document',
        isBroken: false,
      },
      link_text: 'Job A',
      link_title: 'Job A',
      level: '3',
    },
  },
  {
    slice_type: 'nav_item',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      nav_link: {
        id: 'XpsYqBEAACQAjS4U',
        type: 'page',
        tags: [],
        slug: 'page',
        lang: 'de-de',
        uid: 'page',
        link_type: 'Document',
        isBroken: false,
      },
      link_text: 'Produkte',
      link_title: 'produkte',
      level: '1',
    },
  },
  {
    slice_type: 'nav_item',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      nav_link: {
        id: 'XvG_gxIAACMAy3oK',
        type: 'page',
        tags: [],
        slug: 'sub-page',
        lang: 'de-de',
        uid: 'sub-page',
        link_type: 'Document',
        isBroken: false,
      },
      link_text: 'Produkt A',
      link_title: 'Produkt A',
      level: '2',
    },
  },
  {
    slice_type: 'nav_item',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      nav_link: {
        id: 'XpsYqBEAACQAjS4U',
        type: 'page',
        tags: [],
        slug: 'page',
        lang: 'de-de',
        uid: 'page',
        link_type: 'Document',
        isBroken: false,
      },
      link_text: 'Kontakt',
      link_title: 'kontakt',
      level: '1',
    },
  },
];

const NavMockWrongOrder = [
  {
    slice_type: 'nav_item',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      nav_link: {
        id: 'XpsYqBEAACQAjS4U',
        type: 'page',
        tags: [],
        slug: 'page',
        lang: 'de-de',
        uid: 'page',
        link_type: 'Document',
        isBroken: false,
      },
      link_text: 'Unternehmen',
      link_title: 'unternehmen',
      level: '2',
    },
  },
  {
    slice_type: 'nav_item',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      nav_link: {
        id: 'XvG_gxIAACMAy3oK',
        type: 'page',
        tags: [],
        slug: 'sub-page',
        lang: 'de-de',
        uid: 'sub-page',
        link_type: 'Document',
        isBroken: false,
      },
      link_text: 'Geschichte',
      link_title: 'Geschichte',
      level: '2',
    },
  },
  {
    slice_type: 'nav_item',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      nav_link: {
        id: 'XvG_gxIAACMAy3oK',
        type: 'page',
        tags: [],
        slug: 'sub-page',
        lang: 'de-de',
        uid: 'sub-page',
        link_type: 'Document',
        isBroken: false,
      },
      link_text: 'Jobs',
      link_title: 'Jobs',
      level: '2',
    },
  },
  {
    slice_type: 'nav_item',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      nav_link: {
        id: 'XvG_tRIAACIAy3rq',
        type: 'page',
        tags: [],
        slug: 'sub-sub-page',
        lang: 'de-de',
        uid: 'sub-sub-page',
        link_type: 'Document',
        isBroken: false,
      },
      link_text: 'Job A',
      link_title: 'Job A',
      level: '3',
    },
  },
  {
    slice_type: 'nav_item',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      nav_link: {
        id: 'XpsYqBEAACQAjS4U',
        type: 'page',
        tags: [],
        slug: 'page',
        lang: 'de-de',
        uid: 'page',
        link_type: 'Document',
        isBroken: false,
      },
      link_text: 'Produkte',
      link_title: 'produkte',
      level: '1',
    },
  },
  {
    slice_type: 'nav_item',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      nav_link: {
        id: 'XvG_gxIAACMAy3oK',
        type: 'page',
        tags: [],
        slug: 'sub-page',
        lang: 'de-de',
        uid: 'sub-page',
        link_type: 'Document',
        isBroken: false,
      },
      link_text: 'Produkt A',
      link_title: 'Produkt A',
      level: '2',
    },
  },
  {
    slice_type: 'nav_item',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      nav_link: {
        id: 'XpsYqBEAACQAjS4U',
        type: 'page',
        tags: [],
        slug: 'page',
        lang: 'de-de',
        uid: 'page',
        link_type: 'Document',
        isBroken: false,
      },
      link_text: 'Kontakt',
      link_title: 'kontakt',
      level: '1',
    },
  },
];

describe('flatNavToNestedNavConverter', () => {
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('should build a nested Nav from correct nav data', () => {
    const resultNav = flatNavToNestedNavConverter(NavMock);
    // @ts-ignore
    expect(resultNav).toHaveLength(3);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('should build a nested Nav from nav data with wrong order', () => {
    const resultNav = flatNavToNestedNavConverter(NavMockWrongOrder);
    // @ts-ignore
    expect(resultNav).toHaveLength(2);
  });
});
