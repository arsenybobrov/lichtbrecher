import fetchAllContent from './fetchAllContent';
import linkResolver from './linkResolver';
import {Data} from '../../../pageTypes/page.types';
import {initializeApi} from './prismicApi';

const sitemapXML = async (req: any, res: any) => {
  try {
    initializeApi(req);
    const prismicDocuments = await fetchAllContent();

    let body = '';
    if (prismicDocuments && prismicDocuments !== 'undefined') {
      prismicDocuments.forEach((doc: Data) => {
        const { type, uid } = doc;
        console.log('linkResolver', linkResolver({ type, uid }));

        body += (`
          <url>
            <lastmod>${doc.last_publication_date}</lastmod>
            <loc>https://${req.headers.host}${linkResolver({ type, uid })}</loc>
          </url>
        `);
      });
    }

    const xmlDoc =
      `
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${body}
        </urlset>
      `;
    res.set({ 'content-type': 'text/xml; charset=utf-8' });
    res.send(xmlDoc);
  } catch (err) {
    res.status(500).send(`Error: ${err.message}`);
  }
};

export default sitemapXML;
