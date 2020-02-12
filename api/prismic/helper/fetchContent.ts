import Prismic from 'prismic-javascript';
import get from 'lodash/get';
import { accessToken, apiEndpoint } from '../config/configuration';

const fetchContent = async (type?: string | null, uid?: string | null, query?: any | null) => {
  const lang = get(query, 'lang', 'de-de');
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
