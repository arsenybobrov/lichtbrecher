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
  /* source-sans-pro-regular - latin */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    src: url('${fontsPath}source-sans-pro-v14-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),
         url('${fontsPath}source-sans-pro-v14-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('${fontsPath}source-sans-pro-v14-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
         url('${fontsPath}source-sans-pro-v14-latin-regular.woff') format('woff'), /* Modern Browsers */
         url('${fontsPath}source-sans-pro-v14-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
         url('${fontsPath}source-sans-pro-v14-latin-regular.svg#SourceSansPro') format('svg'); /* Legacy iOS */
  }
  /* source-sans-pro-700 - latin */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 700;
    src: url('${fontsPath}source-sans-pro-v14-latin-700.eot'); /* IE9 Compat Modes */
    src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'),
         url('${fontsPath}source-sans-pro-v14-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('${fontsPath}source-sans-pro-v14-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
         url('${fontsPath}source-sans-pro-v14-latin-700.woff') format('woff'), /* Modern Browsers */
         url('${fontsPath}source-sans-pro-v14-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
         url('${fontsPath}source-sans-pro-v14-latin-700.svg#SourceSansPro') format('svg'); /* Legacy iOS */
  }
`;

export default FontsCSS;
