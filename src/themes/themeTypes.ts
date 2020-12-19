import { Theme as KitTheme } from '@nx-kit/styling';
import { ListTheme } from './types/list.type';

export interface Theme extends KitTheme {
  colors: {
    [key: string]: string;
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
