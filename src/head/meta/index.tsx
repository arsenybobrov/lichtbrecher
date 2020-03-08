import React /* , { useContext } */ from 'react';
import Head from 'next/head';
// import { GlobalConfigContext } from '../../contexts/globalConfig';

const Meta: React.FC = () => {
  // const content = useContext(GlobalConfigContext);
  return (
    <Head>
      <title>lichtbrecher</title>
      <link rel="icon" type="icon" href="/assets/favicons/favicon.ico?v=2" />
    </Head>
  );
};

export default Meta;
