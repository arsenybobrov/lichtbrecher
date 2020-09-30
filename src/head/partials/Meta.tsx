import React, { useContext } from 'react';
import Head from 'next/head';
import { ThemeContext } from 'styled-components';
import { SharedContentContext } from '../../contexts/sharedContent/SharedContentContext';
import { PRISMIC_API_IDS } from '../../../prismic/config';

interface MetaProps {
  title?: string;
  description?: string;
  canonical?: string;
  shouldIndex?: boolean;
}

const Meta: React.FC<MetaProps> = ({
  title,
  description,
  canonical,
  shouldIndex = true,
}) => {
  const defaultMeta = useContext(SharedContentContext);
  const theme = useContext(ThemeContext);

  const defaultTitle = defaultMeta?.data[PRISMIC_API_IDS.metaTitle];
  const defaultDescription = defaultMeta?.data[PRISMIC_API_IDS.metaDescription];

  return (
    <Head>
      <title>{title || defaultTitle || ''}</title>
      <meta name="description" content={description || defaultDescription} />
      {(!canonical || canonical === '') && shouldIndex && <meta name="robots" content="index, follow" />}
      {!shouldIndex && <meta name="robots" content="noindex, nofollow" />}
      {canonical && canonical !== '' && <meta name="canonical" content={canonical} />}
      <meta name="theme-color" content={theme.colors.themeColor} />
    </Head>
  );
};

export default Meta;
