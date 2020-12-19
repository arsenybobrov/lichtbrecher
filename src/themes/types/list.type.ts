export interface ListStyles {
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  paddingLeft?: string;
  listStyle?: string;
  color?: string;
  fontSize?: string;
}

export interface ListParams {
  ul?: ListStyles;
  ol?: ListStyles;
  li?: ListStyles;
  disc?: {
    color?: any;
  };
  counter?: {
    color?: string;
    fontWeight?: string;
    counterReset?: {
      level1?: 'doc-counter' | 'doc-alpha';
      level2?: 'doc-counter' | 'doc-alpha';
    };
  };
}

export interface ListTheme {
  xs?: ListParams;
  sm?: ListParams;
  md?: ListParams;
  lg?: ListParams;
  xl?: ListParams;
  xxl?: ListParams;
  xxxl?: ListParams;
}
