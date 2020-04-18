import { LOCALES_MAP, PRISMIC_CUSTOM_TYPES } from '../config';
import { PrismicLink } from '../types';

const linkResolver = ({
  link_type, type, uid, url, lang,
}: PrismicLink) => {
  const { home } = PRISMIC_CUSTOM_TYPES;
  const locale = Object.keys(LOCALES_MAP).find((key) => LOCALES_MAP[key] === lang);
  const localePrefix = locale && locale !== 'default' ? `${locale}/` : '';

  if ((link_type === 'Web' || link_type === 'Media') && url) return url;
  if (type !== home && uid) {
    return `/${localePrefix}${uid}`;
  }
  return `/${localePrefix}`;
};

export default linkResolver;
