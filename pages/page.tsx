import React from 'react';
import {NextPage, NextPageContext} from 'next';
import PageTemplate from '../src/templates/Page';
import fetchContent from '../api/prismic/helper/fetchContent';

interface Props {
  data: any;
  globalConfig: any;
  error400: any;
}

const Page: NextPage<Props> = ({
  data,
  globalConfig,
  error400,
}) => (
  <PageTemplate {...{
    data,
    globalConfig,
    error400,
  }}
  />
);

Page.getInitialProps = async (ctx: NextPageContext): Promise<Props> => {
  const { asPath, query } = ctx;
  const uid = asPath.substr(asPath.lastIndexOf('/') + 1);
  return fetchContent('page', uid, query);
};

export default Page;
