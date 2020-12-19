import React from 'react';
import Picture from './Picture';

export default {
  title: 'Atoms/Picture',
  component: Picture,
};

const imageMock = {
  dimensions: {
    width: 870,
    height: 746,
  },
  alt: 'woman drinking tea',
  copyright: null,
  url:
    'https://images.prismic.io/nexum-ag-intern/8cd637e6-3174-4830-895e-2f3856a03bb0_AVOURY_10_AVOURYONESCHWARZ_TOPSHOT_1392_03_sRGB.png?auto=compress,format&rect=0,0,578,496&w=870&h=746',
  MD: {
    dimensions: {
      width: 325,
      height: 278,
    },
    alt: null,
    copyright: null,
    url:
      'https://images.prismic.io/nexum-ag-intern/8cd637e6-3174-4830-895e-2f3856a03bb0_AVOURY_10_AVOURYONESCHWARZ_TOPSHOT_1392_03_sRGB.png?auto=compress,format&rect=0,0,579,495&w=325&h=278',
  },
  XS: {
    dimensions: {
      width: 621,
      height: 530,
    },
    alt: null,
    copyright: null,
    url:
      'https://images.prismic.io/nexum-ag-intern/8cd637e6-3174-4830-895e-2f3856a03bb0_AVOURY_10_AVOURYONESCHWARZ_TOPSHOT_1392_03_sRGB.png?auto=compress,format&rect=0,1,579,494&w=621&h=530',
  },
};

export const Default = () => <Picture image={imageMock} />;
export const ObjectFit = () => (
  <div style={{ height: '250px', width: '250px' }}>
    <Picture image={imageMock} objectFit />
  </div>
);
export const ObjectFitNoMinHeight = () => (
  <div style={{ height: '250px', width: '250px' }}>
    <Picture image={imageMock} objectFit noMinHeight />
  </div>
);
