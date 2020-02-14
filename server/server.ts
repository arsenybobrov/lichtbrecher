import express from 'express';
import next from 'next';
import compression from 'compression';
import getPreview from '../api/prismic/helper/getPreview';

// @ts-ignore
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV === 'development';

const app = next({ dev });

app.prepare().then(() => {
  const server = express();
  server.use(compression());

  server.get(/^\/assets\/(images|fonts)\//, (_, res, nextHandler) => {
    res.setHeader('Cache-Control', 'public, max-age=300, immutable');
    nextHandler();
  });
  // serve assets from /public folder
  server.use('/assets', express.static(`${__dirname}/../public`));

  server.get('/favicon.ico', () => {});
  server.get('/preview', (req, res) => getPreview(req, res));
  server.get('/', (req, res) => { app.render(req, res, '/index'); });
  server.get('/en/', (req, res) => { app.render(req, res, '/index', { lang: 'en-gb' }); });
  server.get('/:uid', (req, res) => { app.render(req, res, '/page'); });
  server.get('/en/:uid', (req, res) => { app.render(req, res, '/page', { lang: 'en-gb' }); });
  server.get('*', (req, res) => { app.render(req, res, '/404'); });

  server.listen(port, (err: any) => {
    if (err) throw err;
    console.log(`Ready to rock on http://localhost:${port}`);
  });
});
