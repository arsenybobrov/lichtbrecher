import { createGlobalStyle, css } from 'styled-components';

const FontsCSS = createGlobalStyle`
  ${(props) => ((props.theme.name === 'lichtbrecher') && css`
    @font-face {
      font-family: 'LichtbrecherFont';
      font-weight: normal;
      font-style: normal;
      font-display: fallback;
      src: url('/static/fonts/droidsansmonodotted-webfont.woff') format('woff'),
           url('/static/fonts/droidsansmonodotted-webfont.woff2') format('woff2');
    }
  `)}
`;

export default FontsCSS;
