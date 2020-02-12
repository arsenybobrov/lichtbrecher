import { createGlobalStyle, css } from 'styled-components';
import {Theme} from '../themes/default';

const FontsCSS = createGlobalStyle<{ theme: Theme }>`
  ${(props) => ((props.theme.name === 'lichtbrecher') && css`
    @font-face {
      font-family: 'LichtbrecherFont';
      font-weight: normal;
      font-style: normal;
      font-display: fallback;
      src: url('/public/fonts/droidsansmonodotted-webfont.woff') format('woff'),
           url('/public/fonts/droidsansmonodotted-webfont.woff2') format('woff2');
    }
  `)}
`;

export default FontsCSS;
