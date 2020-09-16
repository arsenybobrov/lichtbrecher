import Prismic from 'prismic-javascript';
import get from 'lodash/get';
import { PRISMIC_CUSTOM_TYPES } from '../config';
import { QueryProps } from '../../pages';

const {
  home, page, error404,
} = PRISMIC_CUSTOM_TYPES;
const api = process.env.apiEndpoint || '';
const token = process.env.accessToken || '';

const createClientOptions = (req: any, prismicAccessToken: string) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

export const Client = (req: any) => (
  Prismic.client(api, createClientOptions(req, token))
);


export const fetchDocumentContent = async (
  req: any, query: QueryProps, validPath: boolean, type?: string | null, uid?: string | null
) => {
  const { lang } = query;
  try {
    const serverReqUrl = `https://${get(req, 'rawHeaders[1]', '')}${get(req, 'url', '')}`;
    if (type) {
      let data;
      if (validPath) {
        if (uid) {
          data = await Client(req).getByUID(type, uid, { lang });
        } else { data = await Client(req).getSingle(type, { lang }); }
        if (data) {
          return {
            data, type, serverReqUrl,
          };
        }
      }

      if (!data) {
        const page404Data = await Client(req).getSingle(error404, { lang });
        if (page404Data) { return { page404Data, serverReqUrl }; }
      }
    }
    return {};
  } catch (e) {
    return { e };
  }
};

export const fetchDocuments = async (pageNumber?: number) => {
  try {
    const API = await Prismic.getApi(api, { accessToken: token });
    const prismicResponse = await API.query(
      Prismic.Predicates.any('document.type', [page, home]),
      { pageSize: 100, page: pageNumber || 1 }
    );

    let results: any = get(prismicResponse, 'results', null);
    const localPage = get(prismicResponse, 'page', null);
    const total_pages = get(prismicResponse, 'total_pages', null);

    if (localPage && total_pages && localPage < total_pages) {
      const results2: any = await fetchDocuments(localPage + 1);
      results = [...results, ...results2];
    }
    return results;
  } catch (e) {
    return 'undefined';
  }
};
