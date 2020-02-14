import Prismic from 'prismic-javascript';
import get from 'lodash/get';
import {accessToken, apiEndpoint} from '../config/configuration';

async function fetchAllContent(page?: number) {
  try {
    const API = await Prismic.getApi(apiEndpoint, { accessToken });

    const prismicResponse = await API.query(Prismic.Predicates.any("document.type", ["page", "homepage"]), { pageSize: 100, page: page || 1});

    let results: any = get(prismicResponse, 'results', null);
    const localPage = get(prismicResponse, 'page', null);
    const total_pages = get(prismicResponse, 'total_pages', null);

    if ( localPage && total_pages && localPage < total_pages) {
      const results2: any = await fetchAllContent((localPage + 1));
      results = [...results, ...results2];
    }

    return results
  } catch (e) {
    console.log(`fetchAll - unexpected Error: ${e.message}`); // eslint-disable-line no-console
    return 'undefined';
  }
}

export default fetchAllContent;
