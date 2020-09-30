import React from 'react';
import Document, {
  DocumentContext, Html, Head, Main, NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { LOCALES } from '../prismic/config';
import getLocalePrefix from '../src/helpers/getLocalePrefix';
import Favicons from '../src/head/partials/Favicons';

let lang: string;

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
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
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="google" content="notranslate" />
          <meta name="google" content="nositelinkssearchbox" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="apple-mobile-web-app-status-bar-style" content="Black-translucent" />
          <meta name="msapplication-TileColor" content="#fff" />
          <Favicons />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
