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

export const PrimaryExternalLink = () => (
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

export const Secondary = () => (
  <Link url={externalLink} text="external link" title="click me" skin="secondary" />
);

export const PrimaryActiveLink = () => (
  <Link
    url={internalLink}
    text="active link (doesn't work inside storybook)"
    title="click me"
    skin="primary"
    showActive
  />
);
