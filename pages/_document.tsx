import React from 'react';
import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { LOCALES } from '../prismic/config';
import getLocalePrefix from '../src/helpers/getLocalePrefix';

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
      const lang = localePrefix === '' ? LOCALES.default : localePrefix;

      return {
        ...initialProps,
        styles: (
          <html lang={lang}>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </html>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
