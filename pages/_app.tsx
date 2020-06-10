import App from 'next/app';
import React from 'react';
import setDocumentRelations, { hydrate } from '../prismic/helper/getDocumentRelations';
import EnvScript from '../prismic/helper/createEnvMarkup';

class MyApp extends App {
  static async getInitialProps(appContext: any) {
    const appProps = await App.getInitialProps(appContext);
    const getDocumentRelations = await setDocumentRelations();
    const documentRelations = await getDocumentRelations();
    return { ...appProps, hydratedDocumentRelations: hydrate(documentRelations) };
  }

  render() {
    // @ts-ignore
    const { Component, pageProps, hydratedDocumentRelations } = this.props;
    return (
      <>
        <Component {...pageProps} />
        <EnvScript hydratedDocumentRelations={hydratedDocumentRelations} />
      </>
    );
  }
}

export default MyApp;
