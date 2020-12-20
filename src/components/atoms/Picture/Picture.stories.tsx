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
  alt: 'dummy image',
  copyright: null,
  url:
    'https://images.prismic.io/nexum-demo/8f051437-c165-4347-a161-db86c5752077_pexels-arseny-892493.jpg?auto=compress,format',
  MD: {
    dimensions: {
      width: 325,
      height: 278,
    },
    alt: null,
    copyright: null,
    url:
      'https://images.prismic.io/nexum-demo/8f051437-c165-4347-a161-db86c5752077_pexels-arseny-892493.jpg?auto=compress,format',
  },
  XS: {
    dimensions: {
      width: 621,
      height: 530,
    },
    alt: null,
    copyright: null,
    url:
      'https://images.prismic.io/nexum-demo/8f051437-c165-4347-a161-db86c5752077_pexels-arseny-892493.jpg?auto=compress,format',
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
