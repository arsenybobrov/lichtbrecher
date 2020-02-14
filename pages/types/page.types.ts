// Todo: add types

export interface Data {
  id: string;
  uid?: string | null;
  type: string;
  href: string;
  tags: Array<string>;
  first_publication_date?: string | null;
  last_publication_date?: string | null;
  slugs: Array<string>;
  linked_documents?: Array<string>;
  lang?: string | null;
  alternate_languages?: Array<any>;
  data?: any;
}

export interface PageProps {
  data?: Data;
  globalConfig?: Data;
  error400?: boolean;
}
