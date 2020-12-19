import React from 'react';
import Nav from './Nav';

const nav = {
  id: 'X75jJhIAACEArbGw',
    uid: 'footernav',
    type: 'navigation',
    href:
  'https://nexum-ag-intern.cdn.prismic.io/api/v2/documents/search?ref=X75lDxIAACAArbkD&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X75jJhIAACEArbGw%22%29+%5D%5D',
    tags: [],
    first_publication_date: '2020-11-25T13:59:06+0000',
    last_publication_date: '2020-11-25T14:07:11+0000',
    slugs: ['-footernavigation'],
    linked_documents: [],
    lang: 'de-de',
    alternate_languages: [],
    data: {
    display_name: [
      {
        type: 'heading1',
        text: '### Footernavigation',
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
          link_text: 'Social Media Marketing',
          link_title: 'Social Media Marketing',
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
            link_type: 'Web',
            url: 'https://example.com',
          },
          link_text: 'Social Media Marketing KPIs',
          link_title: 'Social Media Marketing KPIs',
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
            link_type: 'Web',
            url: 'https://example.com',
          },
          link_text: 'Lokale Landingpages',
          link_title: 'Lokale Landingpages',
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
            link_type: 'Any',
          },
          link_text: 'Shops und E-Commerce',
          link_title: 'Shops und E-Commerce',
          level: '1',
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
          },
          link_text: 'Kurse und Veranstaltungen Social Media Marketing',
          link_title: 'Kurse und Veranstaltungen Social Media Marketing',
          level: '2',
        },
        id: 4,
      },
      {
        slice_type: 'nav_item',
        slice_label: null,
        items: [{}],
        primary: {
          nav_link: {
            link_type: 'Any',
          },
          link_text: 'Strategie Beratung, Wachstum, Digitalisierung',
          link_title: 'Strategie Beratung, Wachstum, Digitalisierung',
          level: '1',
        },
        id: 5,
      },
      {
        slice_type: 'nav_item',
        slice_label: null,
        items: [{}],
        primary: {
          nav_link: {
            link_type: 'Web',
            url: 'https://example.com',
          },
          link_text: 'Kurse und Veranstaltungen Social Media Marketing',
          link_title: 'Kurse und Veranstaltungen Social Media Marketing',
          level: '2',
        },
        id: 6,
      },
      {
        slice_type: 'nav_item',
        slice_label: null,
        items: [{}],
        primary: {
          nav_link: {
            link_type: 'Any',
          },
          link_text: 'Performance, Conversion Optimierung',
          link_title: 'Performance, Conversion Optimierung',
          level: '1',
        },
        id: 7,
      },
      {
        slice_type: 'nav_item',
        slice_label: null,
        items: [{}],
        primary: {
          nav_link: {
            link_type: 'Web',
            url: 'https://example.com',
          },
          link_text: 'Kurse und Veranstaltungen Social Media Marketing',
          link_title: 'Kurse und Veranstaltungen Social Media Marketing',
          level: '2',
        },
        id: 8,
      },
      {
        slice_type: 'nav_item',
        slice_label: null,
        items: [{}],
        primary: {
          nav_link: {
            link_type: 'Any',
          },
          link_text: 'Branding',
          link_title: 'Branding',
          level: '1',
        },
        id: 9,
      },
      {
        slice_type: 'nav_item',
        slice_label: null,
        items: [{}],
        primary: {
          nav_link: {
            link_type: 'Web',
            url: 'https://example.com',
          },
          link_text: 'Kurse und Veranstaltungen Social Media Marketing',
          link_title: 'Kurse und Veranstaltungen Social Media Marketing',
          level: '2',
        },
        id: 10,
      },
      {
        slice_type: 'nav_item',
        slice_label: null,
        items: [{}],
        primary: {
          nav_link: {
            link_type: 'Any',
          },
          link_text: 'Relaunch, Kundenbindung, UX, Budgeting',
          link_title: 'Relaunch, Kundenbindung, UX, Budgeting',
          level: '1',
        },
        id: 11,
      },
      {
        slice_type: 'nav_item',
        slice_label: null,
        items: [{}],
        primary: {
          nav_link: {
            link_type: 'Web',
            url: 'https://example.com',
          },
          link_text: 'Kurse und Veranstaltungen Social Media Marketing',
          link_title: 'Kurse und Veranstaltungen Social Media Marketing',
          level: '2',
        },
        id: 12,
      },
    ],
  },
};


export default {
  title: 'Molecules/Nav',
  component: Nav,
};

export const Default = () => <Nav nav={nav} />;
export const Accordion = () => <Nav nav={nav} isAccordion />;
export const AccordionInitialOpenedTab = () => <Nav nav={nav} isAccordion initialOpenedItem={0} />;
