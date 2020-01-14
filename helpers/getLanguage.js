import get from 'lodash/get';

const LANGUAGES_MAP = {
  en: 'en-gb',
  default: 'de-de',
};

const getLanguage = (asPath) => get(LANGUAGES_MAP, asPath.split('/')[1], LANGUAGES_MAP.default);

export default getLanguage;
