import React from 'react';
import Document, {
  DocumentContext, Html, Head, Main, NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { LOCALES } from '../prismic/config';
import getLocalePrefix from '../src/helpers/getLocalePrefix';
import basicAuth from '../src/helpers/basicAuth';

let lang: string;

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    if (ctx.req && ctx.res) {
      // @ts-ignore
      const { credentials, whitelist, errorMsg } = process.env.basicAuth;
      basicAuth(
        ctx.req || {},
        ctx.res || {},
        credentials || {},
        errorMsg || '401 - access denied',
        whitelist || []
      );
    }

    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      const localePrefix = getLocalePrefix(ctx.asPath || '/');
      lang = localePrefix === '' ? LOCALES.default : localePrefix;

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang={lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
