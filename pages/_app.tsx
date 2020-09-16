import App from 'next/app';
import React from 'react';
import { Client, fetchDocuments } from '../prismic/helper/fetchContent';
import getLocalePrefix from '../src/helpers/getLocalePrefix';
import {
  LOCALES, LOCALES_MAP, PRISMIC_API_UIDS, PRISMIC_CUSTOM_TYPES,
} from '../prismic/config';
import Nav from '../src/components/molecules/Nav/Nav';
import makeDocumentRelations from '../prismic/helper/makeDocumentRelations';
import StylesWrapper from '../src/styles/StylesWrapper';
import ContextsWrapper from '../src/contexts/ContextsWrapper';

const { navigation, shared } = PRISMIC_CUSTOM_TYPES;
const { mainNav } = PRISMIC_API_UIDS;

class MyApp extends App {
  static async getInitialProps(appContext: any) {
    const appProps = await App.getInitialProps(appContext);
    const localePrefix = getLocalePrefix(appContext.asPath || '/');
    const language = localePrefix === '' ? LOCALES.default : localePrefix;
    const lang = LOCALES_MAP[language] ?? LOCALES_MAP.default;
    const results = await fetchDocuments();
    const documentRelations = await makeDocumentRelations(results);
    const fetchedMainNav = await Client(appContext.req).getByUID(
      navigation,
      mainNav,
      { lang }
    );
    const fetchedSharedData = await Client(appContext.req).getSingle(
      shared,
      { lang }
    );
    return {
      ...appProps, fetchedMainNav, fetchedSharedData, documentRelations,
    };
  }

  render() {
    const {
      // @ts-ignore
      Component, pageProps, fetchedMainNav, fetchedSharedData, documentRelations,
    } = this.props;

    return (
      <StylesWrapper>
        <ContextsWrapper
          documentRelations={documentRelations}
          fetchedSharedData={fetchedSharedData}
        >
          <Component {...pageProps} />
          <Nav nav={fetchedMainNav} />
          <pre>{JSON.stringify(fetchedSharedData.data.display_name[0].text, null, 2)}</pre>
        </ContextsWrapper>
      </StylesWrapper>
    );
  }
}

export default MyApp;
