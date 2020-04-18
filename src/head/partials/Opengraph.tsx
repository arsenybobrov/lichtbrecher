import React, { useContext } from 'react';
import Head from 'next/head';
import { SharedContentContext } from '../../contexts/sharedContent/SharedContentContext';
import { PRISMIC_API_IDS } from '../../../prismic/config';
import { PrismicSingleImage } from '../../../prismic/types';

interface OpengraphProps {
  title?: string;
  description?: string;
  image?: PrismicSingleImage;
  serverReqUrl: string;
  siteName?: string;
}

const Opengraph: React.FC<OpengraphProps> = ({
  title,
  description,
  image,
  serverReqUrl,
  siteName,
}) => {
  const defaultOpengraph = useContext(SharedContentContext);

  const defaultTitle = defaultOpengraph?.data[PRISMIC_API_IDS.ogTitle];
  const defaultDescription = defaultOpengraph?.data[PRISMIC_API_IDS.ogDescription];
  const defaultImage = defaultOpengraph?.data[PRISMIC_API_IDS.ogImage].url;
  const defaultSitename = defaultOpengraph?.data[PRISMIC_API_IDS.ogSitename];

  return (
    <Head>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={serverReqUrl} />
      <meta property="og:image" content={image?.url || defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:site_name" content={siteName || defaultSitename} />
    </Head>
  );
};

export default Opengraph;
