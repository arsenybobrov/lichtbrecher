import {DefaultTheme} from 'styled-components';

export interface Theme extends DefaultTheme {
  name: 'lichtbrecher';
  colors: {
    primary: string;
    background: string;
  };
  fonts: {
    text: string;
  };
}

const defaultTheme: Theme = {
  name: 'lichtbrecher',
  colors: {
    primary: '#000',
    background: 'lightgray',
  },
  fonts: {
    text: '"LichtbrecherFont", sans-serif',
  },
};

export default defaultTheme;
