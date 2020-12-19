import { css } from 'styled-components';
import { media } from '@nx-kit/styling';
import { Theme } from './themeTypes';

const defaultTheme: Theme = {
  global: {
    color: {
      primary500: '#6880A5',
      primary600: '#4176C7',
      primary700: '#1E4279',
      primary800: '#002967',
      secondary700: '#fef092',
      secondary800: '#bc2f83',
      secondaryD700: '#5dd39e',
      tertiary500: '#009948',
      background: '#fff',
      white500: '#ffffff',
      black500: '#000000',
      gray50: '#f4f4f4',
      gray100: '#efefef',
      gray200: '#e8e8e8',
      gray300: '#e1e1e1',
      gray400: '#e7e7e7',
      gray500: '#dcdada',
      gray600: '#6b6b6b',
      gray700: '#444444',
      brandDanger500: '#B90739',
      brandSuccess500: '#1CA642',
      focus: '#1CA642',
      text: '#000000',
      headerHighlight: '#feea63',
      linkHighlight: 'rgb(221, 230, 228)',
      footer: '#e3f0f3',
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
      5: '5px',
      10: '10px',
      20: '20px',
      40: '40px',
    },
    font: {
      sourceSansRegular: `
        font-family: Source Sans Pro, Helvetice, sans-serif;
        font-weight: 400;
      `,
      sourceSansBold: `
        font-family: Source Sans Pro, Helvetice, sans-serif;
        font-weight: 700;
      `,
    },
    fontSize: {
      small: '14px',
      medium: '16px',
      copyregular: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      28: '28px',
      34: '34px',
      40: '40px',
      headLineBig: '46px',
      headLineBigXS: '34px',
      50: '50px',
      58: '58px',
      72: '72px',
    },
    lineHeight: {
      default: 1.625,
      headline: 1.3,
      link: 1,
      copytext: 1.625,
    },
    zIndex: {
      1: 1,
      10: 10,
      50: 50,
      100: 100,
    },
    focusRing: css`
      &:after {
        position: absolute;
        content: '';
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        display: block;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.global.color.focus};
        margin: -5px;
      }
    `,
    underlay: css<any>`
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.5);
      transition: opacity 350ms ease-in-out;
      opacity: ${({ state }) => (state === 'entering' || state === 'entered' ? 1 : 0)};
    `,
    overlayWrapper: css<any>`
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      align-items: ${({ alignItems }) => alignItems};
      justify-content: ${({ justifyContent }) => justifyContent};
    `,
  },
  component: {
    heading: {
      skin: {
        500: css`
          ${({ theme }) => theme.global.font.sourceSansBold};
          font-size: ${({ theme }) => theme.global.fontSize['18']};
          line-height: ${({ theme }) => theme.global.lineHeight.headline};
          margin-bottom: 18px;
          ${media('xl')} {
            font-size: ${({ theme }) => theme.global.fontSize['20']};
          }
        `,
        600: css`
          ${({ theme }) => theme.global.font.sourceSansBold};
          font-size: ${({ theme }) => theme.global.fontSize['20']};
          line-height: ${({ theme }) => theme.global.lineHeight.headline};
          margin-bottom: 18px;
          ${media('lg')} {
            font-size: ${({ theme }) => theme.global.fontSize['28']};
          }
          ${media('xl')} {
            font-size: ${({ theme }) => theme.global.fontSize['28']};
          }
        `,
        700: css`
          ${({ theme }) => theme.global.font.sourceSansBold};
          font-size: ${({ theme }) => theme.global.fontSize['24']};
          line-height: ${({ theme }) => theme.global.lineHeight.headline};
          margin-bottom: 20px;
          ${media('md')} {
            font-size: ${({ theme }) => theme.global.fontSize['40']};
          }
          ${media('lg')} {
            font-size: ${({ theme }) => theme.global.fontSize['40']};
          }
          ${media('xl')} {
            font-size: ${({ theme }) => theme.global.fontSize['40']};
          }
        `,
        800: css`
          ${({ theme }) => theme.global.font.sourceSansBold};
          font-size: ${({ theme }) => theme.global.fontSize.headLineBigXS};
          line-height: ${({ theme }) => theme.global.lineHeight.headline};
          margin-bottom: 15px;
          ${media('md')} {
            font-size: ${({ theme }) => theme.global.fontSize.headLineBig};
            margin-bottom: 20px;
          }
          ${media('lg')} {
            font-size: ${({ theme }) => theme.global.fontSize.headLineBig};
          }
          ${media('xl')} {
            font-size: ${({ theme }) => theme.global.fontSize.headLineBig};
          }
          a {
            color: ${(props) => props.theme.global.color.text};
            position: relative;
            text-decoration: none;
            &:before {
              content: '';
              position: absolute;
              bottom: 0;
              left: -5px;
              z-index: -1;
              height: 20px;
              width: calc(100% + 10px);
              background: ${({ theme }) => theme.global.color.linkHighlight};
              transition: height 0.5s ease-out;
              ${media('md')} {
                height: 25px;
              }
            }
            &:hover:before {
              height: 100%;
            }
          }
        `,
      },
    },
    text: {
      skin: {
        400: css`
          font-size: ${({ theme }) => theme.global.fontSize.copyregular};
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
          color: ${({ theme }) => theme.global.color.white500};
          background-color: ${({ theme }) => theme.global.color.black500};
          padding: 10px 30px;
          margin: 10px;
          border: 4px solid ${({ theme }) => theme.global.color.black500};

          ${({ isHovered }) =>
            isHovered &&
            css`
              color: ${({ theme }) => theme.global.color.white500};
              background-color: ${({ theme }) => theme.global.color.tertiary500};
              border: 4px solid ${({ theme }) => theme.global.color.tertiary500};
            `};
          ${({ isActive }) =>
            isActive &&
            css`
              color: ${({ theme }) => theme.global.color.white500};
              background-color: rgba(0, 153, 72, 0.7);
              border: 4px solid ${({ theme }) => theme.global.color.tertiary500};
            `};
          ${({ isDisabled }) =>
            isDisabled &&
            css`
              color: #b7b7b7;
              background-color: ${({ theme }) => theme.global.color.gray50};
              border: 4px solid ${({ theme }) => theme.global.color.gray50};
            `};
          ${({ isFocused, theme }) => isFocused && theme.global.focusRing};
        `,
        secondary: css<any>`
          color: ${({ theme }) => theme.global.color.black500};
          background-color: ${({ theme }) => theme.global.color.white500};
          padding: 12px 30px;
          margin: 10px;
          border: 2px solid ${({ theme }) => theme.global.color.black500};

          ${({ isHovered }) =>
            isHovered &&
            css`
              color: ${({ theme }) => theme.global.color.tertiary500};
              background-color: ${({ theme }) => theme.global.color.white500};
              border: 2px solid ${({ theme }) => theme.global.color.tertiary500};
            `};
          ${({ isActive }) =>
            isActive &&
            css`
              color: ${({ theme }) => theme.global.color.tertiary500};
              background-color: ${({ theme }) => theme.global.color.white500};
              border: 2px solid ${({ theme }) => theme.global.color.tertiary500};
            `};
          ${({ isDisabled }) =>
            isDisabled &&
            css`
              color: #b7b7b7;
              background-color: ${({ theme }) => theme.global.color.white500};
              border: 2px solid #b7b7b7;
            `};
          ${({ isFocused, theme }) => isFocused && theme.global.focusRing};
        `,
      },
    },
    link: {
      global: css<any>`
        position: relative;
        cursor: pointer;
        color: ${({ theme }) => theme.global.color.text};
        &:focus {
          outline: none;
        }
      `,
      skin: {
        copytext: css<any>`
          transition: color 0.5s ease-out, background-color 0.5s ease-out;
          &:hover {
            color: ${({ theme }) => theme.global.color.white500};
            background-color: ${({ theme }) => theme.global.color.text};
          }
        `,
        primary: css<any>`
          ${({ theme }) => theme.global.font.sourceSansBold};
          font-size: ${({ theme }) => theme.global.fontSize.small};
          line-height: ${({ theme }) => theme.global.lineHeight.link};
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.5s ease-out;
          &:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2px;
            width: 0;
            transition: width 0.5s ease-out;
            background-color: ${({ theme }) => theme.global.color.text};
          }
          &:hover:before {
            width: 100%;
          }
        `,
        primaryBig: css<any>`
          ${({ theme }) => theme.component.link.skin.primary};
          font-size: ${({ theme }) => theme.global.fontSize.medium};
          &:before {
            content: '';
            position: absolute;
            bottom: -3px;
            left: -5px;
            z-index: -1;
            height: 0;
            width: calc(100% + 5px);
            background: ${({ theme }) => theme.global.color.headerHighlight};
            transition: height 0.5s ease-out;
          }
          ${media('lg')} {
            &:hover:before {
              height: calc(100% + 5px);
              width: calc(100% + 10px);
            }
          }
          &.active:before {
            height: 10px;
            width: calc(100% + 10px);
          }
        `,
        primary700: css<any>`
          ${({ theme }) => theme.component.link.skin.primary};
          ${({ theme }) => theme.global.font.sourceSansRegular};
          &:hover {
            color: ${({ theme }) => theme.global.color.secondary800};
          }
        `,
        tertiary: css<any>`
          position: relative;
          ${({ theme }) => theme.global.font.sourceSansRegular};
          font-size: ${({ theme }) => theme.global.fontSize.small};
          line-height: ${({ theme }) => theme.global.lineHeight.link};
          text-decoration: none;
          transition: color 0.5s ease-out;
          &:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            height: 1px;
            width: 0;
            transition: width 0.5s ease-out;
            background-color: ${({ theme }) => theme.global.color.text};
          }
          &:hover:before {
            width: 100%;
          }
        `,
      },
    },
    divider: {
      global: css<any>`
        overflow: visible;
        border: none;
        margin: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        align-self: stretch;
        background-color: ${({ theme }) => theme.global.color.gray600};
        display: inline-block;
      `,
      skin: {
        100: css<any>`
          width: ${({ orientation }) => (orientation === 'vertical' ? '1px' : '100%')};
          height: ${({ orientation }) => (orientation === 'vertical' ? '20px' : '1px')};
          margin: ${({ orientation }) => (orientation === 'vertical' ? '0 5px' : '5px 0')};
        `,
      },
    },
    overlay: {
      global: css<any>`
        &:focus {
          outline: none;
        }
        position: relative;
      `,
      skin: {
        default: css<any>`
          background: white;
          padding: 30px;
          margin: 30px;
          border-radius: 5px;
          ${({ isFocused, theme }) => isFocused && theme.global.focusRing};

          transition: opacity 350ms ease-in-out;
          opacity: 0;
          opacity: ${({ state }) => state === 'entered' && 1};
          opacity: ${({ state }) => state === 'exiting' && 0};
          transform: translateY(20px);
          ${({ state }) => state === 'entered' && `transform: translateY(0)`};
        `,
        fullscreen: css<any>`
          background: white;
          padding: 30px;
          width: 100vw;
          height: 100vh;
          ${({ isFocused, theme }) => isFocused && theme.global.focusRing};
        `,
      },
    },
    textfield: {
      global: css<any>`
        position: relative;
        border: 1px solid ${({ theme }) => theme.global.color.gray500};
        border-radius: 2px;
        padding: 4px;
        color: ${({ theme }) => theme.global.color.gray700};

        &:focus {
          outline: none;
          border: 1px solid ${({ theme }) => theme.global.color.focus};
        }

        ${({ isFocused, hasError }) =>
          isFocused &&
          !hasError &&
          css`
            box-shadow: 0 0 0 1px ${({ theme }) => theme.global.color.focus};
          `};

        ${({ isFocused, hasError }) =>
          isFocused &&
          hasError &&
          css`
            box-shadow: 0 0 0 1px ${({ theme }) => theme.global.color.brandDanger500};
          `};

        ${({ isDisabled }) =>
          isDisabled &&
          css`
            background-color: ${({ theme }) => theme.global.color.gray50};
          `};

        ${({ hasError }) =>
          hasError &&
          css`
            &&& {
              border: 1px solid ${({ theme }) => theme.global.color.brandDanger500};
            }
          `};
      `,
      skin: {},
    },
    checkbox: {
      global: css<any>`
        position: relative;
        border: 1px solid ${({ theme }) => theme.global.color.gray500};
        border-radius: 2px;
        padding: 4px;
        color: ${({ theme }) => theme.global.color.gray700};

        &:focus {
          outline: none;
        }

        ${({ isFocused, hasError }) =>
          isFocused &&
          !hasError &&
          css`
            box-shadow: 0 0 0 2px ${({ theme }) => theme.global.color.focus};
          `};

        ${({ isFocused, hasError }) =>
          isFocused &&
          hasError &&
          css`
            &&& {
              box-shadow: 0 0 0 2px ${({ theme }) => theme.global.color.brandDanger500};
            }
          `};

        ${({ isDisabled }) =>
          isDisabled &&
          css`
            background-color: ${({ theme }) => theme.global.color.gray50};
          `};

        ${({ hasError }) =>
          hasError &&
          css`
            && {
              box-shadow: 0 0 0 1px ${({ theme }) => theme.global.color.brandDanger500};
            }
          `};
      `,
      skin: {},
    },
  },
  colors: {
    themeColor: '#990000',
  },
  grid: {
    gap: { xs: 20, md: 40 },
  },
  spacing: {
    xl: {
      default: 200,
      cmsElements: {
        header_distance_helper: {
          '01_intro_image_text': 200,
        },
        share_buttons: {
          '01_intro_image_text': 0,
          '07_wide_image_text': 100,
        },
        '01_intro_image_text': {
          '01_intro_image_text': 25,
        },
        '13_testimonial': {
          '07_wide_image_text': 100,
        },
        '28_videointro': {
          '18_main_content': 100,
        },
      },
    },
    xs: {
      default: 100,
      cmsElements: {
        header_distance_helper: {
          '01_intro_image_text': 50,
          '07_wide_image_text': 50,
        },
        share_buttons: {
          '01_intro_image_text': 25,
        },
        '01_intro_image_text': {
          '01_intro_image_text': 25,
        },
        '13_testimonial': {
          '07_wide_image_text': 60,
        },
        '28_videointro': {
          '18_main_content': 50,
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
        paddingLeft: '1.5em',
        listStyle: 'none',
      },
      li: {
        marginTop: '0.375em',
        marginBottom: '0.375em',
        paddingLeft: '0.64em',
      },
      disc: {
        color: css`
          ${({ theme }) => theme.global.color.secondaryD700}
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
