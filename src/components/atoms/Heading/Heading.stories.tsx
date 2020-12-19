import React from 'react';
import { Heading } from '@nx-kit/heading';
import getHeadingTag from '../../../helpers/getHeadingTag';

export default {
  title: 'Atoms/Heading',
  component: Heading,
};

export const Standard = () => (
  <Heading elementType="h1">
    Heading Test
  </Heading>
);

export const Skin800 = () => (
  <Heading skin="800" elementType={getHeadingTag('heading1')}>
    Heading Test
  </Heading>
);

export const Skin700 = () => (
  <Heading skin="700" elementType={getHeadingTag('heading2')}>
    Heading Test
  </Heading>
);

export const Skin600 = () => (
  <Heading skin="600" elementType={getHeadingTag('heading3')}>
    Heading Test
  </Heading>
);

export const Skin500 = () => (
  <Heading skin="500" elementType={getHeadingTag('heading4')}>
    Heading Test
  </Heading>
);
