export interface PrismicLink {
  link_type?: string | null;
  type?: string | null;
  uid?: string | null;
  url?: string;
}

const linkResolver = ({ link_type, type, uid, url }: PrismicLink): string => {
  if (type !== 'homepage') {
    return `/${uid}`;
  }
  if (url && (link_type === 'Web' || link_type === 'Media')) return url;
  return '/';
};

export default linkResolver;
