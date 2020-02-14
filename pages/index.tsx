import React from 'react';
import { NextPage, NextPageContext } from 'next';
import HomepageTemplate from '../src/templates/Homepage';
import fetchContent from '../api/prismic/helper/fetchContent';
import { PageProps } from './types/page.types';

const Index: NextPage<PageProps> = ({ data, globalConfig, error400 }) => (
  <HomepageTemplate
    {...{
      data,
      globalConfig,
      error400,
    }}
  />
);

Index.getInitialProps = async ({ query }: NextPageContext): Promise<PageProps> =>
  fetchContent('homepage', null, query);

export default Index;
