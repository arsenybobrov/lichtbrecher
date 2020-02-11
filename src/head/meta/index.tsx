import React, { useContext } from 'react';
import Head from 'next/head';
import { GlobalConfigContext } from '../../contexts/globalConfig';

const Meta = () => {
  const content = useContext(GlobalConfigContext);
  return (
    <Head>
      <title>title</title>
      <link rel="icon" type="icon" href="/static/favicons/favicon.ico?v=2" />
    </Head>
  );
};

export default Meta;
