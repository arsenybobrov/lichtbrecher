import React from 'react';
import Copytext from './Copytext';

export default {
  title: 'Molecules/Copytext',
  component: Copytext,
};

const PrismicRichText = [
  {
    type: 'heading1',
    text: 'Willkommen beim LICHTBRECHER!',
    spans: [],
  },
  {
    type: 'paragraph',
    text: '',
    spans: [],
  },
  {
    type: 'paragraph',
    text:
      'Lorem ipsum bold text, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, italic text, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    spans: [
      {
        start: 12,
        end: 21,
        type: 'strong',
      },
      {
        start: 220,
        end: 231,
        type: 'em',
      },
      {
        start: 502,
        end: 518,
        type: 'hyperlink',
        data: {
          link_type: 'Web',
          url: 'https://example.com',
        },
      },
      {
        start: 559,
        end: 569,
        type: 'hyperlink',
        data: {
          id: 'X1jyEBIAACcATUPa',
          type: 'page',
          tags: [],
          slug: 'sub-page',
          lang: 'de-de',
          uid: 'sub-page',
          link_type: 'Document',
          isBroken: false,
        },
      },
    ],
  },
];

const dangeorousString = '<h1>Lorem Ipsum</h1><br/><p>Hello World!</p><br><script>alert("hacked")</script><a href="#">I am a link</a>';

export const Richtext = () => (
  <Copytext
    richtext={PrismicRichText}
  />
);

export const TextString = () => (
  <Copytext textstring="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." />
);

export const Markup = () => (
  <Copytext markup={dangeorousString} />
);
