import { DefaultTheme } from 'styled-components';

export interface Theme extends DefaultTheme {
  colors: {
    primary: string;
    themeColor: string;
  };
  fonts: {
    text: string;
  };
}
