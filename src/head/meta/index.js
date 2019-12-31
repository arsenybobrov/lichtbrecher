import React, { useContext } from 'react';
import Head from 'next/head';
import { GlobalConfigContext } from '../../contexts/globalConfig';

const Meta = () => {
  const content = useContext(GlobalConfigContext);
  return (
    <Head>
      <title>{content.data.display_name[0].text}</title>
    </Head>
  );
};

export default Meta;
