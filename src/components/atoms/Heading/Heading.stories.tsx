import React from 'react';
import { Heading } from '@nx-kit/heading';
import getHeadingTag from '../../../helpers/getHeadingTag';

export default {
  title: 'Atoms/Heading',
  component: Heading,
};

export const Standard = () => (
  <Heading elementType="h1">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
  </Heading>
);

export const Skin800 = () => (
  <Heading skin="800" elementType={getHeadingTag('heading1')}>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
  </Heading>
);

export const Skin700 = () => (
  <Heading skin="700" elementType={getHeadingTag('heading2')}>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
  </Heading>
);

export const Skin600 = () => (
  <Heading skin="600" elementType={getHeadingTag('heading3')}>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
  </Heading>
);

export const Skin500 = () => (
  <Heading skin="500" elementType={getHeadingTag('heading4')}>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
  </Heading>
);
