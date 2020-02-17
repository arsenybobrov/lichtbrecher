import Prismic from 'prismic-javascript';
import {NextApiRequest} from 'next';
import {ServerResponse} from 'http';
import { accessToken, apiEndpoint } from '../config/configuration';
import linkResolver from './linkResolver';

interface Response extends ServerResponse{
  cookie: any;
  redirect: any;
}

const getPreview = async (req: NextApiRequest, res: Response) => {
  const { token } = req.query;
  const API = await Prismic.getApi(apiEndpoint, { accessToken });
  // @ts-ignore
  const url = await API.previewSession(token as string, ({ type, uid }): string => {
    return linkResolver({ type, uid });
  }, '/');
  res.cookie(Prismic.previewCookie, token, { maxAge: 2 * 60 * 1000, path: '/', httpOnly: false });
  res.redirect(302, url);
};

export default getPreview;
