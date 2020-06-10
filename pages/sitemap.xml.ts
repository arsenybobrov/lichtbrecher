import { NextPageContext } from 'next';
import { IncomingMessage } from 'http';
import { fetchDocuments } from '../prismic/helper/fetchContent';
import {
  isHomepage, isLocaleValid, urlHasLocalePrefix,
} from './index';
import { Data } from '../prismic/types';
import makeDocumentRelations from '../prismic/helper/makeDocumentRelations';
import linkResolver from '../prismic/helper/linkResolver';

const sitemapXml = (results: Array<Data>, req: IncomingMessage | undefined, documentRelations: any) => `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${
  results.map((result) => {
    const { type, uid, lang } = result;
    return `
      <url>
        <loc>https://${req?.headers.host}${linkResolver({ type, uid, lang }, documentRelations)}</loc>
        <lastmod>${result.last_publication_date?.substring(0, 10)}</lastmod>
      </url>
    `;
  }).join('')
}
</urlset>`;

const Sitemap = () => {};

Sitemap.getInitialProps = async ({ req, res, asPath }: NextPageContext) => {
  const results = await fetchDocuments();
  const documentRelations = await makeDocumentRelations(results);
  const path = asPath || '/';
  let validUrl = false;

  if (
    (!isHomepage(path) && !urlHasLocalePrefix(path)) ||
    (!isHomepage(path) && urlHasLocalePrefix(path) && isLocaleValid(path))
  ) {
    validUrl = true;
  }
  if (res) {
    if (validUrl) {
      res.setHeader('Content-Type', 'text/xml; charset=utf-8');
      res.write(sitemapXml(results, req, documentRelations));
    } else {
      res.statusCode = 404;
    }
    res.end();
  }
};

export default Sitemap;
