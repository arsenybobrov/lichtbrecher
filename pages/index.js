import React from 'react';
import Prismic from 'prismic-javascript';
import StylesWrapper from '../src/styles/Wrapper';
import { accessToken, apiEndpoint } from '../api/prismic-configuration';
import Error400 from '../src/templates/errors/400';
import HomepageTemplate from '../src/templates/Homepage';

const Index = ({ data, error400 }) => {
  return (
    <StylesWrapper>
      {
        error400
        ? <Error400 />
        : <HomepageTemplate data={data} />
      }
    </StylesWrapper>
  );
};

Index.getInitialProps = async ({ req }) => {
  try {
    const API = await Prismic.getApi(apiEndpoint, { accessToken, req })
    const data = await API.getByUID('homepage', 'homepage');
    return { data }
  } catch (e) {
    const error400 = true;
    return { error400 }
  }
};

export default Index;
