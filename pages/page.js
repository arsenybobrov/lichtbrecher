import React from 'react';
import Prismic from 'prismic-javascript';
import StylesWrapper from '../src/styles/Wrapper';
import { accessToken, apiEndpoint } from '../api/prismic-configuration';
import Error400 from '../src/templates/errors/400';
import PageTemplate from '../src/templates/Page';

const Page = ({ globalConfig, data, error400 }) => {
  return (
      <StylesWrapper>
        {
          error400
          ? <Error400 />
          : <PageTemplate globalConfig={globalConfig} data={data} />
        }
      </StylesWrapper>
  );
};

Page.getInitialProps = async ({ req }) => {
  try {
    const API = await Prismic.getApi(apiEndpoint, { accessToken, req })
    const globalConfig = await API.getSingle('global_config');
    const data = await API.getByUID('page', 'page-two');
    return { globalConfig, data }
  } catch (e) {
    const error400 = true;
    return { error400 }
  }
};

export default Page;
