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
  Page404Data?: Data;
  serverReqUrl?: string;
  e?: { status: number };
}

export interface PrismicLink {
  link_type?: string | null;
  type?: string | null;
  uid?: string | null;
  url?: string;
  lang?: string | null;
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
