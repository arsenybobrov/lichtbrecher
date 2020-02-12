import React from 'react';
import {NextPage, NextPageContext} from 'next';
import HomepageTemplate from '../src/templates/Homepage';
import fetchContent from '../api/prismic/helper/fetchContent';

interface Props {
  data?: any;
  globalConfig?: any;
  error400?: any;
}

const Index: NextPage<Props> = ({ data, globalConfig, error400 }) => (
  <HomepageTemplate
    {...{
      data,
      globalConfig,
      error400,
    }}
  />
);

Index.getInitialProps = async ({ query }: NextPageContext): Promise<Props> =>
  fetchContent('homepage', null, query);

export default Index;
