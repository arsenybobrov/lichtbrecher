import get from 'lodash/get';
import { PageProps } from '../../../pageTypes/page.types';
import { getPrismicApi, getRef } from './prismicApi';

const fetchContent = async (
  type?: string | null,
  uid?: string | null,
  query?: any | null
): Promise<PageProps> => {
  const lang = get(query, 'lang', 'de-de');
  try {
    const API = await getPrismicApi();
    const REF = (await getRef()) || '';
    const globalConfig = await API.getSingle('global_config', { lang, ref: REF });
    if (type) {
      let data;
      if (uid) {
        data = await API.getByUID(type, uid, { lang, ref: REF });
      } else {
        data = await API.getSingle(type, { lang, ref: REF });
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
