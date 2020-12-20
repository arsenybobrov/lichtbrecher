import { createGlobalStyle } from 'styled-components';
import { Theme } from '../../themes/themeTypes';
import root from '../../helpers/getRootPath';

const fontsPath = `${root}fonts/`;

const FontsCSS = createGlobalStyle<{ theme: Theme }>`
  @font-face {
    font-family: 'BrandFont';
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
    src:
      url('${fontsPath}droidsansmonodotted-webfont.woff') format('woff'),
      url('${fontsPath}droidsansmonodotted-webfont.woff2') format('woff2');
  }
`;

export default FontsCSS;
