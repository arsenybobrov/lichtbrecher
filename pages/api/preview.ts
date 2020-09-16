import { NextApiRequest, NextApiResponse } from 'next';
import get from 'lodash/get';
import { Client, fetchDocuments } from '../../prismic/helpers/fetchContent';
import linkResolver from '../../prismic/helpers/linkResolver';
import makeDocumentRelations from '../../prismic/helpers/makeDocumentRelations';
import getLocalePrefix from '../../src/helpers/getLocalePrefix';
import { LOCALES_MAP } from '../../prismic/config';

export const Preview = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.query.token as string;
  const results = await fetchDocuments();
  const documentRelations = await makeDocumentRelations(results);

  if (token) {
    try {
      const url: string = await Client(req).previewSession(token, linkResolver, '/');
      console.log(url);
      const uid = url.split('/').pop();
      const localePrefix = getLocalePrefix(url || '/');
      const lang = get(LOCALES_MAP, localePrefix, LOCALES_MAP.default);

      res.writeHead(302, { Location: linkResolver({ uid, lang }, documentRelations) });
      res.end();
    } catch {
      res
        .status(400)
        .send('Something went wrong with the previewSession request');
    }
  } else {
    res.status(400).send('Missing token from preview request');
  }
};

export default Preview;
