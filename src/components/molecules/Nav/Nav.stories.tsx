import React from 'react';
import Nav from './Nav';

const navWidthHeadlines = {
  id: 'X1jxlRIAACgATUGh',
  uid: 'mainnav',
  type: 'navigation',
  href:
    'https://nexum-demo.cdn.prismic.io/api/v2/documents/search?ref=X9-MCBAAACIAU_6f&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X1jxlRIAACgATUGh%22%29+%5D%5D',
  tags: [],
  first_publication_date: '2020-09-09T15:15:36+0000',
  last_publication_date: '2020-12-20T17:38:16+0000',
  slugs: ['-main-navigation'],
  linked_documents: [],
  lang: 'de-de',
  alternate_languages: [
    {
      id: 'X2ZgbBIAACgAiMIE',
      uid: 'mainnav',
      type: 'navigation',
      lang: 'en-us',
    },
  ],
  data: {
    display_name: [
      {
        type: 'heading1',
        text: '### Main Navigation',
        spans: [],
      },
    ],
    body: [
      {
        slice_type: 'nav_item',
        slice_label: null,
        items: [{}],
        primary: {
          nav_link: {
            link_type: 'Any',
          },
          link_text: 'Links block headline 1',
          link_title: null,
          level: '1',
        },
        id: 0,
      },
      {
        slice_type: 'nav_item',
        slice_label: null,
        items: [{}],
        primary: {
          nav_link: {
            id: 'Xy_hkBIAACEA4qKx',
            type: 'homepage',
            tags: [],
            slug: 'home',
            lang: 'de-de',
            link_type: 'Document',
            isBroken: false,
          },
          link_text: 'Internal link',
          link_title: 'go to homepage',
          level: '2',
        },
        id: 1,
      },
      {
        slice_type: 'nav_item',
        slice_label: null,
        items: [{}],
        primary: {
          nav_link: {
            link_type: 'Any',
          },
          link_text: 'Links block headline 2',
          link_title: null,
          level: '1',
        },
        id: 2,
      },
      {
        slice_type: 'nav_item',
        slice_label: null,
        items: [{}],
        primary: {
          nav_link: {
            link_type: 'Web',
            url: 'https://example.com',
            target: '_blank',
          },
          link_text: 'external link',
          link_title: null,
          level: '2',
        },
        id: 3,
      },
    ],
  },
};

const mixedNav = {
  id: 'X1jxlRIAACgATUGh',
  uid: 'mainnav',
  type: 'navigation',
  href:
    'https://nexum-demo.cdn.prismic.io/api/v2/documents/search?ref=X9-M3xAAACIAVAJe&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X1jxlRIAACgATUGh%22%29+%5D%5D',
  tags: [],
  first_publication_date: '2020-09-09T15:15:36+0000',
  last_publication_date: '2020-12-20T17:41:51+0000',
  slugs: ['-main-navigation'],
  linked_documents: [],
  lang: 'de-de',
  alternate_languages: [
    {
      id: 'X2ZgbBIAACgAiMIE',
      uid: 'mainnav',
      type: 'navigation',
      lang: 'en-us',
    },
  ],
  data: {
    display_name: [
      {
        type: 'heading1',
        text: '### Main Navigation',
        spans: [],
      },
    ],
    body: [
      {
        slice_type: 'nav_item',
        slice_label: null,
        items: [{}],
        primary: {
          nav_link: {
            id: 'Xy_hkBIAACEA4qKx',
            type: 'homepage',
            tags: [],
            slug: 'home',
            lang: 'de-de',
            link_type: 'Document',
            isBroken: false,
          },
          link_text: 'Homepage',
          link_title: null,
          level: '1',
        },
        id: 0,
      },
      {
        slice_type: 'nav_item',
        slice_label: null,
        items: [{}],
        primary: {
          nav_link: {
            id: 'X1jx5hIAACcATUMX',
            type: 'page',
            tags: [],
            slug: 'page',
            lang: 'de-de',
            uid: 'page',
            link_type: 'Document',
            isBroken: false,
          },
          link_text: 'Page (L1)',
          link_title: null,
          level: '1',
        },
        id: 1,
      },
      {
        slice_type: 'nav_item',
        slice_label: null,
        items: [{}],
        primary: {
          nav_link: {
            id: 'X1jyEBIAACcATUPa',
            type: 'page',
            tags: [],
            slug: 'sub-page',
            lang: 'de-de',
            uid: 'sub-page',
            link_type: 'Document',
            isBroken: false,
          },
          link_text: 'Sub-Page (L2)',
          link_title: null,
          level: '2',
        },
        id: 2,
      },
      {
        slice_type: 'nav_item',
        slice_label: null,
        items: [{}],
        primary: {
          nav_link: {
            id: 'X1jyyBIAACYATUcT',
            type: 'page',
            tags: [],
            slug: 'sub-sub-page',
            lang: 'de-de',
            uid: 'sub-sub-page',
            link_type: 'Document',
            isBroken: false,
          },
          link_text: 'Sub-Sub-Page (L3)',
          link_title: null,
          level: '3',
        },
        id: 3,
      },
      {
        slice_type: 'nav_item',
        slice_label: null,
        items: [{}],
        primary: {
          nav_link: {
            link_type: 'Web',
            url: 'https://example.com',
            target: '_blank',
          },
          link_text: 'External Link',
          link_title: null,
          level: '1',
        },
        id: 4,
      },
    ],
  },
};

export default {
  title: 'Molecules/Nav',
  component: Nav,
};

export const Mixed = () => <Nav nav={mixedNav} />;
export const NavWithHeadlines = () => <Nav nav={navWidthHeadlines} />;
export const Accordion = () => <Nav nav={navWidthHeadlines} isAccordion />;
export const AccordionInitialOpenedTab = () => (
  <Nav nav={navWidthHeadlines} isAccordion initialOpenedItem={0} />
);
