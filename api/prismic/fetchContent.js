import Prismic from 'prismic-javascript';
import { accessToken, apiEndpoint } from './configuration';

const fetchContent = async (type, uid, lang) => {
  try {
    const API = await Prismic.getApi(apiEndpoint, { accessToken });
    const globalConfig = await API.getSingle('global_config', { lang });
    if (type) {
      let data;
      if (uid) {
        data = await API.getByUID(type, uid, { lang });
      } else {
        data = await API.getSingle(type, { lang });
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
