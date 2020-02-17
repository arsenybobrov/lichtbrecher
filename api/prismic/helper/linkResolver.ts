export interface PrismicLink {
  link_type?: string | null;
  type?: string | null;
  uid?: string | null;
  url?: string;
}

const linkResolver = ({ link_type, type, uid, url }: PrismicLink): string => {
  if ((link_type === 'Web' || link_type === 'Media') && url) return url;
  if (type !== 'homepage' && uid) {
    return `/${uid}`;
  }
  return '/';
};

export default linkResolver;
