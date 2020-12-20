import { ListTheme } from './types/list.type';

export interface Theme {
  global: {
    color: {
      [key: string]: string;
    };
    font: {
      [key: string]: string;
    };
    breakpoint: {
      xs: { min: number; max: number };
      sm: { min: number; max: number };
      md: { min: number; max: number };
      lg: { min: number; max: number };
      xl: { min: number; max: number };
      xxl: { min: number; max: number };
      xxxl: { min: number; max: null };
    };
    spacing: {
      [key: string]: number;
    };
    fontSize: {
      [key: string]: number;
    };
    lineHeight: {
      [key: string]: number;
    };
  };
  component: {
    heading: {
      [key: string]: any;
    };
    text: {
      [key: string]: any;
    };
    link: {
      [key: string]: any;
    };
  };
  grid: {
    gap: {
      [key: string]: number;
    };
  };
  spacing: {
    xl: {
      default: number;
      cmsElements: {
        [key: string]: {
          [key: string]: number;
        };
      };
    };
    xs: {
      default: number;
      cmsElements: {
        [key: string]: {
          [key: string]: number;
        };
      };
    };
  };
  list: ListTheme;
}
