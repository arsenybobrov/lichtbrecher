import { createGlobalStyle } from 'styled-components';

const BodyTransition = createGlobalStyle`
  body {
    transition: opacity .15s ease-out;
    opacity: 0;
  }
`;

export default BodyTransition;
