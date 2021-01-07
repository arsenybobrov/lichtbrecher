import { NextPageContext } from 'next';
import { IncomingMessage } from 'http';

const robotsTxt = (req: IncomingMessage | undefined) => `
  Sitemap: https://${req?.headers.host}/sitemap.xml
  User-agent: *
  Allow: /*
  Disallow: /api/*
`;

const Robots = () => {};

Robots.getInitialProps = async ({ req, res }: NextPageContext) => {
  if (res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.write(robotsTxt(req));
    res.end();
  }
};

export default Robots;
