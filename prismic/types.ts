export interface Data {
  id: string;
  uid?: string | null;
  type?: string | null;
  href: string;
  tags: Array<string>;
  first_publication_date?: string | null;
  last_publication_date?: string | null;
  slugs: Array<string>;
  linked_documents?: Array<string>;
  lang?: string | null;
  alternate_languages?: Array<any>; // TODO: define languages array
  data?: any; // TODO: define data
}

export interface PageProps {
  data?: Data;
  type?: string;
  sharedData?: Data;
  page404Data?: Data;
  serverReqUrl?: string;
  documentRelations?: any;
  e?: { status: number };
}

export interface PrismicLink {
  id?: string | null;
  link_type?: string | null;
  type?: string | null;
  uid?: string | null;
  url?: string;
  lang?: string | null;
  target?: string | null;
  tags?: Array<string>;
  slug?: string;
  isBroken?: boolean;
}
export interface PrismicExternalLink {
  link_type: 'Web',
  url: string;
  target: string;
}

export interface PrismicSingleImage {
  dimensions: {
    width: number;
    height: number;
  };
  alt: string;
  copyright: string;
  url: string;
}

export interface PrismicResponsiveImage {
  dimensions: {
    width: number;
    height: number;
  };
  alt: string;
  copyright: string;
  url: string;
  tablet: PrismicSingleImage;
  smartphone: PrismicSingleImage;
}

export interface PrismicParagraphSpanObject {
  start: number;
  end: number;
  type: string;
  data: PrismicLink | PrismicExternalLink;
}

export interface PrismicRichtextObject {
  type: string;
  text: string;
  spans: Array<PrismicParagraphSpanObject | any>;
}
