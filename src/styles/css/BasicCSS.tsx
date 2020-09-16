import { createGlobalStyle } from 'styled-components';
import ResetCSS from './ResetCSS';
import { Theme } from '../../themes/themeTypes';

const BasicCSS = createGlobalStyle<{ theme: Theme }>`
  ${ResetCSS};

  html {
    box-sizing: border-box;
    width: 100%;
    min-height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: ${(props) => props.theme.fonts.text};
    -webkit-font-smoothing: antialiased;
    word-break: break-word;
    max-width: 990px;
    margin: 35px auto;
    padding: 0 15px;
  }

  ::-moz-selection {
    background: #990000;
    color: white;
  }

  ::selection {
    background: #990000;
    color: white;
  }

  button {
    background: none;
    border: none;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    padding: 0;
    display: inline-block;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  select,
  option {
    appearance: none;
    border: none;
    border-radius: 0;
  }

  select::-ms-expand {
    display: none;
  }
`;

export default BasicCSS;
