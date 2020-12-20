import { css } from 'styled-components';
import { media } from '@nx-kit/styling';
import { Theme } from './themeTypes';

const defaultTheme: Theme = {
  global: {
    color: {
      primary: '#990000',
      secondary: '#6880A5',
      selection: '#000',
      metaTheme: '#fff',
    },
    breakpoint: {
      xs: { min: 0, max: 575.98 },
      sm: { min: 576, max: 767.98 },
      md: { min: 768, max: 991.98 },
      lg: { min: 992, max: 1199.98 },
      xl: { min: 1200, max: 1599.98 },
      xxl: { min: 1600, max: 1919.98 },
      xxxl: { min: 1920, max: null },
    },
    spacing: {
      small: 5,
      medium: 10,
      big: 20,
    },
    font: {
      brandRegular: `
        font-family: BrandFont, Helvetice, sans-serif;
      `,
    },
    fontSize: {
      small: 14,
      medium: 16,
      big: 20,
    },
    lineHeight: {
      default: 1.625,
      headline: 1.3,
      copytext: 1.625,
    },
  },
  component: {
    heading: {
      skin: {
        500: css`
          ${({ theme }) => theme.global.font.brandRegular};
          font-size: ${({ theme }) => theme.global.fontSize.small}px;
          line-height: ${({ theme }) => theme.global.lineHeight.headline};
          ${media('xl')} {
            font-size: ${({ theme }) => theme.global.fontSize.small}px;
          }
        `,
        600: css`
          ${({ theme }) => theme.global.font.brandRegular};
          font-size: ${({ theme }) => theme.global.fontSize.medium}px;
          line-height: ${({ theme }) => theme.global.lineHeight.headline};
          ${media('xl')} {
            font-size: ${({ theme }) => theme.global.fontSize.medium}px;
          }
        `,
        700: css`
          ${({ theme }) => theme.global.font.brandRegular};
          font-size: ${({ theme }) => theme.global.fontSize.medium}px;
          line-height: ${({ theme }) => theme.global.lineHeight.headline};
          ${media('xl')} {
            font-size: ${({ theme }) => theme.global.fontSize.big}px;
          }
        `,
        800: css`
          ${({ theme }) => theme.global.font.brandRegular};
          font-size: ${({ theme }) => theme.global.fontSize.medium}px;
          line-height: ${({ theme }) => theme.global.lineHeight.headline};
          ${media('xl')} {
            font-size: ${({ theme }) => theme.global.fontSize.big}px;
          }
        `,
      },
    },
    text: {
      skin: {
        400: css`
          font-size: ${({ theme }) => theme.global.fontSize.medium}px;
          line-height: ${({ theme }) => theme.global.lineHeight.copytext};
          p:not(:last-child) {
            margin-bottom: 15px;
          }
        `,
      },
    },
    button: {
      global: css<any>`
        position: relative;
        display: inline-flex;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        overflow: visible;
        margin: 0;
        border-style: solid;
        text-transform: none;
        -webkit-appearance: button;
        vertical-align: top;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: none;
        isolation: isolate;

        &:hover,
        &:active {
          box-shadow: none;
        }

        &:disabled {
          cursor: default;
        }

        &:focus {
          outline: none;
        }

        &::-moz-focus-inner {
          border: 0;
          border-style: none;
          padding: 0;
          margin-block-start: -2px;
          margin-block-end: -2px;
        }
      `,
      skin: {
        primary: css<any>`
          color: ${({ theme }) => theme.global.color.primary};
          ${({ isHovered }) => isHovered && css``};
          ${({ isActive }) => isActive && css``};
          ${({ isDisabled }) => isDisabled && css``};
          ${({ isFocused, theme }) => isFocused && theme.global.focusRing};
        `,
        secondary: css<any>`
          color: ${({ theme }) => theme.global.color.primary};
          ${({ isHovered }) => isHovered && css``};
          ${({ isActive }) => isActive && css``};
          ${({ isDisabled }) => isDisabled && css``};
          ${({ isFocused }) => isFocused && css``};
        `,
      },
    },
    link: {
      global: css<any>`
        color: ${({ theme }) => theme.global.color.primary};
        &:focus {
          outline: none;
        }
      `,
      skin: {
        primary: css<any>`
          font-size: ${({ theme }) => theme.global.fontSize.medium}px;
          line-height: ${({ theme }) => theme.global.lineHeight.default};
        `,
        secondary: css<any>`
          font-size: ${({ theme }) => theme.global.fontSize.small}px;
          line-height: ${({ theme }) => theme.global.lineHeight.default};
        `,
      },
    },
  },
  grid: {
    gap: { xs: 20, md: 40 },
  },
  spacing: {
    xl: {
      default: 50,
      cmsElements: {
        text: {
          text: 50,
        },
      },
    },
    xs: {
      default: 25,
      cmsElements: {
        text: {
          text: 25,
        },
      },
    },
  },
  list: {
    xs: {
      ul: {
        marginTop: '1em',
        marginBottom: '1em',
        marginLeft: '0.8em',
        listStyle: 'none',
      },
      ol: {
        marginTop: '1em',
        marginBottom: '1em',
        paddingLeft: '3.5em',
        listStyle: 'none',
      },
      li: {
        marginTop: '0.375em',
        marginBottom: '0.375em',
        paddingLeft: '0.64em',
      },
      disc: {
        color: css`
          ${({ theme }) => theme.global.color.primary}
        `,
      },
      counter: {
        fontWeight: '400',
        counterReset: {
          level1: 'doc-counter',
          level2: 'doc-alpha',
        },
      },
    },
  },
};

export default defaultTheme;
