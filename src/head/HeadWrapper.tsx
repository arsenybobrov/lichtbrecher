import React from 'react';
import get from 'lodash/get';
import Meta from './partials/Meta';
import { Data } from '../../prismic/types';
import { PRISMIC_API_IDS } from '../../prismic/config';
import Favicons from './partials/Favicons';
import Opengraph from './partials/Opengraph';

interface HeadProps {
  data: Data;
}

const HeadWrapper: React.FC<HeadProps> = ({ data, children }) => {
  const title = get(data.data, PRISMIC_API_IDS.metaTitle, null);
  const description = get(data.data, PRISMIC_API_IDS.metaDescription, null);
  const siteName = get(data.data, PRISMIC_API_IDS.ogSitename, null);
  const ogImage = get(data.data, PRISMIC_API_IDS.ogImage, null);
  const ogTitle = get(data.data, PRISMIC_API_IDS.ogTitle, null);
  const ogDescription = get(data.data, PRISMIC_API_IDS.ogDescription, null);
  const canonical = get(data.data, PRISMIC_API_IDS.metaCanonical, null);
  const shouldIndex = get(data.data, PRISMIC_API_IDS.metaIndex, true);

  return (
    <>
      <Meta
        title={title}
        description={description}
        canonical={canonical}
        shouldIndex={shouldIndex}
      />
      <Opengraph
        title={ogTitle || title}
        description={ogDescription || description}
        image={ogImage}
        siteName={siteName}
      />
      <Favicons />
      {children}
    </>
  );
};

export default HeadWrapper;
