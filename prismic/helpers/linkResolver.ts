import { LOCALES_MAP, PRISMIC_CUSTOM_TYPES } from '../config';
import { PrismicLink } from '../types';
import getPathFromDocumentRelations from './getPathFromDocumentRelations';

const linkResolver = ({
  link_type, type, uid, url, lang,
}: PrismicLink, documentRelations?: any) => {
  const { home } = PRISMIC_CUSTOM_TYPES;
  const locale = Object.keys(LOCALES_MAP).find((key) => LOCALES_MAP[key] === lang);
  const localePrefix = locale && locale !== 'default' ? `${locale}/` : '';

  if ((link_type === 'Web' || link_type === 'Media') && url) return url;

  const path = documentRelations && getPathFromDocumentRelations(uid, documentRelations);

  if (type !== home && uid) {
    if (!path) {
      return `/${localePrefix}${uid}`;
    }
    return `/${localePrefix}${path}`;
  }
  return `/${localePrefix}`;
};

export default linkResolver;
