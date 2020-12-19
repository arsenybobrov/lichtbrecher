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
    ${(props) => props.theme.global.font.sourceSansRegular};
    -webkit-font-smoothing: antialiased;
    word-break: break-word;
    margin: 0 auto;
    padding: 0;
    color: ${(props) => props.theme.global.color.text};
    line-height: ${(props) => props.theme.global.lineHeight.default};
    width: 100%;
    height: 100%;
    position: relative;
  }

  ::-moz-selection {
    background: ${(props) => props.theme.global.color.text};
    color: white;
  }

  ::selection {
    background: ${(props) => props.theme.global.color.text};
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
