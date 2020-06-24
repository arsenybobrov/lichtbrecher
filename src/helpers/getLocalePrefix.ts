import get from 'lodash/get';
import { LOCALES } from '../../prismic/config';

const getLocalePrefix = (asPath: string) => {
  const localePrefix = get(LOCALES, asPath.split('/')[1], '');
  return localePrefix;
};

export default getLocalePrefix;
