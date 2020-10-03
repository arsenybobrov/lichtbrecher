import App from 'next/app';
import React from 'react';
import { Client, fetchDocuments } from '../prismic/helpers/fetchContent';
import getLocalePrefix from '../src/helpers/getLocalePrefix';
import {
  LOCALES, LOCALES_MAP, PRISMIC_API_UIDS, PRISMIC_CUSTOM_TYPES,
} from '../prismic/config';
import Nav from '../src/components/molecules/Nav/Nav';
import makeDocumentRelations from '../prismic/helpers/makeDocumentRelations';
import StylesWrapper from '../src/styles/StylesWrapper';
import ContextsWrapper from '../src/contexts/ContextsWrapper';
import { Data } from '../prismic/types';
import isClient from '../src/helpers/isClient';

interface Cache {
  cachedResults?: Array<Object>;
  cachedMainNav?: Data;
  cachedSharedData?: Data;
  lang?: string;
}

const { navigation, shared } = PRISMIC_CUSTOM_TYPES;
const { mainNav } = PRISMIC_API_UIDS;

let cache: Cache = {};

class MyApp extends App {
  static async getInitialProps(appContext: any) {
    const { asPath, req } = appContext.ctx;
    const appProps = await App.getInitialProps(appContext);
    const localePrefix = getLocalePrefix(asPath || '/');
    const language = localePrefix === '' ? LOCALES.default : localePrefix;
    const lang = LOCALES_MAP[language] ?? LOCALES_MAP.default;

    if (!isClient() || cache.lang !== lang) {
      cache = {};
    }

    let results;
    if (cache.cachedResults) {
      results = cache.cachedResults;
    } else {
      results = await fetchDocuments();
    }

    let fetchedMainNav;
    if (cache.cachedMainNav) {
      fetchedMainNav = cache.cachedMainNav;
    } else {
      fetchedMainNav = await Client(req).getByUID(
        navigation,
        mainNav,
        { lang }
      );
    }

    let fetchedSharedData;
    if (cache.cachedSharedData) {
      fetchedSharedData = cache.cachedSharedData;
    } else {
      fetchedSharedData = await Client(req).getSingle(
        shared,
        { lang }
      );
    }

    const documentRelations = await makeDocumentRelations(results);
    const serverReqUrl = `https://${req?.rawHeaders[1] ?? ''}${req?.url ?? ''}`;

    return {
      // eslint-disable-next-line max-len
      ...appProps, fetchedMainNav, fetchedSharedData, documentRelations, serverReqUrl, results, lang,
    };
  }

  render() {
    const {
      // @ts-ignore
      // eslint-disable-next-line max-len
      Component, pageProps, fetchedMainNav, fetchedSharedData, documentRelations, serverReqUrl, results, lang,
    } = this.props;

    cache.lang = lang;
    cache.cachedMainNav = fetchedMainNav;
    cache.cachedSharedData = fetchedSharedData;
    cache.cachedResults = results;

    return (
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="google" content="notranslate" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="Black-translucent" />
        <meta name="msapplication-TileColor" content="#fff" />
        <StylesWrapper>
          <ContextsWrapper
            documentRelations={documentRelations}
            fetchedSharedData={fetchedSharedData}
            serverReqUrl={serverReqUrl}
          >
            <Nav nav={fetchedMainNav} />
            <Component {...pageProps} />
          </ContextsWrapper>
        </StylesWrapper>
      </>
    );
  }
}

export default MyApp;
