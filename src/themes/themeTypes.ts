import { DefaultTheme } from 'styled-components';

export interface Theme extends DefaultTheme {
  colors: {
    default: string;
    primary: string;
    themeColor: string;
  };
  fonts: {
    text: string;
  };
}
