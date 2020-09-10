import App from 'next/app';
import React from 'react';
import get from 'lodash/get';
import { ThemeProvider } from 'styled-components';
import { Client, fetchDocuments } from '../prismic/helper/fetchContent';
import getLocalePrefix from '../src/helpers/getLocalePrefix';
import { LOCALES, LOCALES_MAP, PRISMIC_CUSTOM_TYPES } from '../prismic/config';
import Nav from '../src/components/molecules/Nav/Nav';
import defaultTheme from '../src/themes/default';
import { DocumentRelationsProvider } from '../src/contexts/documentRelations/DocumentRelationsContext';
import makeDocumentRelations from '../prismic/helper/makeDocumentRelations';

const { navigation } = PRISMIC_CUSTOM_TYPES;

class MyApp extends App {
  static async getInitialProps(appContext: any) {
    const appProps = await App.getInitialProps(appContext);
    const localePrefix = getLocalePrefix(appContext.asPath || '/');
    const lang = localePrefix === '' ? LOCALES.default : localePrefix;
    const results = await fetchDocuments();
    const documentRelations = await makeDocumentRelations(results);
    const fetchedMainNav = await Client(appContext.req).getByUID(
      navigation,
      'mainnav',
      { lang: get(LOCALES_MAP, lang, LOCALES_MAP.default) }
    );
    return { ...appProps, fetchedMainNav, documentRelations };
  }

  render() {
    const {
      // @ts-ignore
      Component, pageProps, fetchedMainNav, documentRelations,
    } = this.props;

    return (
      <DocumentRelationsProvider value={documentRelations}>
        <ThemeProvider theme={defaultTheme}>
          <Component {...pageProps} />
          <Nav nav={fetchedMainNav} />
        </ThemeProvider>
      </DocumentRelationsProvider>
    );
  }
}

export default MyApp;
