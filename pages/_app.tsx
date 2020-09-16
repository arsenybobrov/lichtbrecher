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
    const { asPath, req } = appContext.ctx;
    const appProps = await App.getInitialProps(appContext);
    const localePrefix = getLocalePrefix(asPath || '/');
    const language = localePrefix === '' ? LOCALES.default : localePrefix;
    const lang = LOCALES_MAP[language] ?? LOCALES_MAP.default;
    const results = await fetchDocuments();
    const documentRelations = await makeDocumentRelations(results);
    const fetchedMainNav = await Client(req).getByUID(
      navigation,
      mainNav,
      { lang }
    );
    const fetchedSharedData = await Client(req).getSingle(
      shared,
      { lang }
    );
    const serverReqUrl = `https://${req?.rawHeaders[1] ?? ''}${req?.url ?? ''}`;
    return {
      ...appProps, fetchedMainNav, fetchedSharedData, documentRelations, serverReqUrl,
    };
  }

  render() {
    const {
      // @ts-ignore
      Component, pageProps, fetchedMainNav, fetchedSharedData, documentRelations, serverReqUrl,
    } = this.props;

    return (
      <StylesWrapper>
        <ContextsWrapper
          documentRelations={documentRelations}
          fetchedSharedData={fetchedSharedData}
          serverReqUrl={serverReqUrl}
        >
          <Component {...pageProps} />
          <Nav nav={fetchedMainNav} />
          Shared content is available via useContext.
          <pre>{JSON.stringify(fetchedSharedData.data.display_name[0].text, null, 2)}</pre>
        </ContextsWrapper>
      </StylesWrapper>
    );
  }
}

export default MyApp;
