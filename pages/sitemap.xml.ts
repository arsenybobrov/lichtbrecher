import { NextPageContext } from 'next';
import { fetchDocuments } from '../prismic/helper/fetchContent';
import {
  getLocalePrefix, isHomepage, isLocaleValid, urlHasLocalePrefix,
} from './index';
import { Data } from '../prismic/types';

const sitemapXml = (results: Array<Data>, asPath: string) => `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${results.map((result) => `
          <url>
            <loc>${process.env.baseUrl}/${getLocalePrefix(asPath) !== '' ? `${getLocalePrefix(asPath)}/` : ''}${result.uid !== null ? result.uid : ''}</loc>
            <lastmod>${result.last_publication_date?.substring(0, 10)}</lastmod>
          </url>
        `).join('')}
    </urlset>
  `;

const Sitemap = () => {};

Sitemap.getInitialProps = async ({ res, asPath }: NextPageContext) => {
  const results = await fetchDocuments();
  let validUrl = false;
  const path = asPath || '/';

  if (
    (!isHomepage(path) && !urlHasLocalePrefix(path)) ||
    (!isHomepage(path) && urlHasLocalePrefix(path) && isLocaleValid(path))
  ) {
    validUrl = true;
  }
  if (res) {
    if (validUrl) {
      res.setHeader('Content-Type', 'text/xml; charset=utf-8');
      res.write(sitemapXml(results, path));
    } else {
      res.statusCode = 404;
    }
    res.end();
  }
};

export default Sitemap;
