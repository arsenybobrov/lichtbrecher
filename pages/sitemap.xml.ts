import { NextPageContext } from 'next';
import { IncomingMessage } from 'http';
import { fetchDocuments } from '../prismic/helpers/fetchContent';
import { Data } from '../prismic/types';
import makeDocumentRelations from '../prismic/helpers/makeDocumentRelations';
import linkResolver from '../prismic/helpers/linkResolver';
import { PRISMIC_API_IDS } from '../prismic/config';

const sitemapXml = (results: Array<Data>, req: IncomingMessage | undefined, documentRelations: any) => `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${results.map((result) => {
    const {
      type, uid, lang, alternate_languages,
    } = result;
    if (result.data && result.data[PRISMIC_API_IDS.metaIndex] === false) {
      return '';
    }
    return `
        <url>
          <loc>https://${req?.headers.host}${linkResolver({ type, uid, lang }, documentRelations)}</loc>
          ${alternate_languages && alternate_languages.map((translation) => {
    // eslint-disable-next-line no-shadow
        const { type, uid, lang } = translation; // eslint-disable-line indent
        if (translation.type) { // eslint-disable-line indent
          return `<xhtml:link rel="alternate" hreflang="${lang}" href="https://${req?.headers.host}${linkResolver({ // eslint-disable-line indent
            type, // eslint-disable-line indent
            uid, // eslint-disable-line indent
            lang, // eslint-disable-line indent
              }, documentRelations)}" />`; // eslint-disable-line indent
            } // eslint-disable-line indent
        return ''; // eslint-disable-line indent
    // eslint-disable-next-line indent
      })}
          <lastmod>${result.last_publication_date?.substring(0, 10)}</lastmod>
        </url>
    `;
  }).join('')}
</urlset>`;

const Sitemap = () => {};

Sitemap.getInitialProps = async ({ req, res }: NextPageContext) => {
  const results = await fetchDocuments();
  const documentRelations = await makeDocumentRelations(results);

  if (res) {
    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.write(sitemapXml(results, req, documentRelations));
    res.end();
  }
};

export default Sitemap;
