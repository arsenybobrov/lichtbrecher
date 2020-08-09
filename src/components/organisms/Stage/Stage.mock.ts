const StagePrimaryMock = {
  background_color: '#c44b4b',
  font_color: '#ffffff',
  background_image: {
    dimensions: {
      width: 2880,
      height: 1620,
    },
    alt: null,
    copyright: null,
    url: 'https://images.prismic.io/slicemachine-blank/6b2bf485-aa12-44ef-8f06-dce6b91b9309_dancing.png?auto=compress,format&rect=0,58,2048,1152&w=2880&h=1620',
    tablet: {
      dimensions: {
        width: 1152,
        height: 1536,
      },
      alt: null,
      copyright: null,
      url: 'https://images.prismic.io/slicemachine-blank/6b2bf485-aa12-44ef-8f06-dce6b91b9309_dancing.png?auto=compress,format&rect=446,0,1152,1536&w=1152&h=1536',
    },
    smartphone: {
      dimensions: {
        width: 621,
        height: 1104,
      },
      alt: null,
      copyright: null,
      url: 'https://images.prismic.io/slicemachine-blank/6b2bf485-aa12-44ef-8f06-dce6b91b9309_dancing.png?auto=compress,format&rect=591,0,864,1536&w=621&h=1104',
    },
  },
  background_image_opacity: 30,
  background_image_position: 'center center',
  change_position: false,
  text_block_1: [
    {
      type: 'paragraph',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      spans: [],
    },
  ],
  image_1: {
    dimensions: {
      width: 1440,
      height: 1620,
    },
    alt: null,
    copyright: null,
    url: 'https://images.prismic.io/slicemachine-blank/3109b42f-4f55-4de1-91fa-40c734f88e62_ice-cream.png?auto=compress,format&rect=341,0,1365,1536&w=1440&h=1620',
    tablet: {
      dimensions: {
        width: 1152,
        height: 768,
      },
      alt: null,
      copyright: null,
      url: 'https://images.prismic.io/slicemachine-blank/3109b42f-4f55-4de1-91fa-40c734f88e62_ice-cream.png?auto=compress,format&rect=0,85,2048,1365&w=1152&h=768',
    },
    smartphone: {
      dimensions: {
        width: 621,
        height: 552,
      },
      alt: null,
      copyright: null,
      url: 'https://images.prismic.io/slicemachine-blank/3109b42f-4f55-4de1-91fa-40c734f88e62_ice-cream.png?auto=compress,format&rect=159,0,1728,1536&w=621&h=552',
    },
  },
  text_block_2: [
    {
      type: 'paragraph',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      spans: [],
    },
  ],
  image_2: {
    dimensions: {
      width: 1440,
      height: 1620,
    },
    alt: null,
    copyright: null,
    url: 'https://images.prismic.io/slicemachine-blank/e608a89b-0298-451c-a826-e56743544836_zombieing.png?auto=compress,format&rect=341,0,1365,1536&w=1440&h=1620',
    tablet: {
      dimensions: {
        width: 1152,
        height: 768,
      },
      alt: null,
      copyright: null,
      url: 'https://images.prismic.io/slicemachine-blank/e608a89b-0298-451c-a826-e56743544836_zombieing.png?auto=compress,format&rect=0,85,2048,1365&w=1152&h=768',
    },
    smartphone: {
      dimensions: {
        width: 621,
        height: 552,
      },
      alt: null,
      copyright: null,
      url: 'https://images.prismic.io/slicemachine-blank/e608a89b-0298-451c-a826-e56743544836_zombieing.png?auto=compress,format&rect=159,0,1728,1536&w=621&h=552',
    },
  },
};

const StageItemsMock = [
  {
    sub_navigation_link_text: 'external link',
    sub_navigation_link: {
      link_type: 'Web',
      url: 'https://example.com',
      target: '_blank',
    },
    sub_navigation_link_title: 'go to an external page',
  },
  {
    sub_navigation_link_text: 'internal link',
    sub_navigation_link: {
      id: 'Xy_hkBIAACEA4qKx',
      type: 'homepage',
      tags: [],
      slug: 'home',
      lang: 'de-de',
      link_type: 'Document',
      isBroken: false,
    },
    sub_navigation_link_title: 'go to an internal page',
  },
];

const StageMock = {
  primary: StagePrimaryMock,
  items: StageItemsMock,
};

export default StageMock;
