import { theme } from '../../src/themes/default';

declare module '@nx-kit/styling' {
  export type Theme = typeof theme;
}
