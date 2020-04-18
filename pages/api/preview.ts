import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '../../prismic/helper/fetchContent';
import linkResolver from '../../prismic/helper/linkResolver';

export const Preview = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.query.token as string;
  if (token) {
    try {
      const url = await Client(req).previewSession(token, linkResolver, '/');
      res.writeHead(302, { Location: url });
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
