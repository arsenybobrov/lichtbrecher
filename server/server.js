const express = require('express');
const nextJs = require('next');
const compression = require('compression');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV === 'development';

const app = nextJs({ dev });

app.prepare().then(() => {
  const server = express();
  server.use(compression());

  server.get(/^\/static\/(images|fonts)\//, (_, res, nextHandler) => {
    res.setHeader('Cache-Control', 'public, max-age=300, immutable');
    nextHandler();
  });

  server.get('/', (req, res) => {app.render(req, res, '/index')});
  server.get('/:uid', (req, res) => {app.render(req, res, '/page')});
  server.get('*', (req, res) => {app.render(req, res, '/404')});

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Ready to rock on http://localhost:${port}`);
  });
});
