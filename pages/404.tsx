import React from 'react';
import {NextPage, NextPageContext} from 'next';
import fetchContent from '../api/prismic/helper/fetchContent';
import PageTemplate from '../src/templates/Page';

interface Props {
  data?: any;
  globalConfig?: any;
  error400?: any;
}

const Page404: NextPage<Props> = ({
  globalConfig,
  error400,
  data,
}) => (
  <PageTemplate {...{
    data,
    globalConfig,
    error400,
  }}
  />
);

Page404.getInitialProps = async ({ query }: NextPageContext): Promise<Props> => fetchContent(null, null, query);

export default Page404;
