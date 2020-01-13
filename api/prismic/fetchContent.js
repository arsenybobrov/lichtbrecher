import Prismic from 'prismic-javascript';
import get from 'lodash/get';
import { accessToken, apiEndpoint } from './configuration';

const LANGUAGES_MAP = {
  en: 'en-gb',
  default: 'de-de',
};

const fetchContent = async (type, uid, lang) => {
  const language = get(LANGUAGES_MAP, lang, LANGUAGES_MAP.default);
  try {
    const API = await Prismic.getApi(apiEndpoint, { accessToken });
    const globalConfig = await API.getSingle('global_config', { lang: language });
    if (type) {
      let data;
      if (uid) {
        data = await API.getByUID(type, uid, { lang: language });
      } else {
        data = await API.getSingle(type, { lang: language });
      }
      return { globalConfig, data };
    }
    return { globalConfig };
  } catch (e) {
    const error400 = true;
    return { error400 };
  }
};

export default fetchContent;
