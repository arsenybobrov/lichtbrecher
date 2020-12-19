import React from 'react';
import Link from './Link';

export default {
  title: 'Atoms/Link',
  component: Link,
};

const externalLink = {
  link_type: 'Web',
  url: 'https://example.com',
};

const internalLink = {
  id: 'X8kLmBIAACkAn_Za',
  type: 'page',
  tags: [],
  slug: 'irgendeine-themenseite',
  lang: 'de-de',
  uid: 'irgendeine-themenseite',
  link_type: 'Document',
  isBroken: false,
};

export const Primary = () => (
  <Link url={externalLink} text="external link" title="click me" skin="primary" />
);

export const PrimaryInternalLink = () => (
  <Link
    url={internalLink}
    text="internal link"
    title="click me"
    skin="primary"
  />
);

export const PrimaryAnchorLink = () => (
  <Link text="anchor link" title="click me" skin="primary" anchor_id="funky_lement" />
);

export const PrimaryBig = () => (
  <Link url={externalLink} text="external link" title="click me" skin="primaryBig" />
);

// TODO: make work in storybook
export const PrimaryBigActiveLink = () => (
  <Link
    url={internalLink}
    text="internal link"
    title="click me"
    skin="primaryBig"
    showActive
  />
);

export const Copytext = () => (
  <Link url={externalLink} text="external link" title="click me" skin="copytext" />
);

export const Tertiary = () => (
  <Link url={externalLink} text="external link" title="click me" skin="tertiary" />
);

export const Primary700 = () => (
  <Link url={externalLink} text="external link" title="click me" skin="primary700" />
);
