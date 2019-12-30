import Prismic from 'prismic-javascript';
import { accessToken, apiEndpoint } from './configuration';

const fetchContent = async (req, type, uid) => {
  try {
    const API = await Prismic.getApi(apiEndpoint, { accessToken, req });
    const globalConfig = await API.getSingle('global_config');
    if (type) {
      let data;
      if (uid) {
        data = await API.getByUID(type, uid);
      } else {
        data = await API.getSingle(type);
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
