import get from 'lodash/get';

const linkResolver = (link) => {
  if (get(link, 'link_type', null) === 'Document') {
    if (get(link, 'type', null) !== 'homepage') {
      return `/${link.uid}`;
    }
    return '/';
  }

  return get(link, 'url', '/');
};

export default linkResolver;
