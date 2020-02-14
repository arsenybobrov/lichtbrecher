import get from 'lodash/get';

export interface PrismicLink {
  link_type?: string | null;
  type?: string | null;
  uid?: string | null;
  url?: string;
}

const linkResolver = (link: PrismicLink): string => {
  if (get(link, 'link_type', null) === 'Document') {
    if (get(link, 'type', null) !== 'homepage') {
      return `/${link.uid}`;
    }
    return '/';
  }

  return get(link, 'url', '/');
};

export default linkResolver;
