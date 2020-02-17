import Prismic from 'prismic-javascript';
import ClientCookies from 'js-cookie';
import { NextApiRequest } from 'next';
import { accessToken, apiEndpoint } from '../config/configuration';

let PRISMIC_API: any;
let PREVIEW_REF: string | undefined;

export const getPrismicApi = () => PRISMIC_API;
export const getRef = () => PREVIEW_REF;

const getApi = (): void => {
  try {
    PRISMIC_API = Prismic.getApi(apiEndpoint, {
      accessToken,
    });
  } catch (error) {
    console.log('PRISMIC API CALL: ', error); // eslint-disable-line no-console
  }
};

export const initializeApi = (req?: NextApiRequest) => {
  if (req) {
    console.log('initializeApi');
    PREVIEW_REF = req.cookies[Prismic.previewCookie];
  } else {
    PREVIEW_REF = ClientCookies.get(Prismic.previewCookie);
  }

  getApi();
};
