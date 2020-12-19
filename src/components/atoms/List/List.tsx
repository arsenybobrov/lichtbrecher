import styled, { css } from 'styled-components';
import { media } from '@nx-kit/styling';
import { ListTheme } from '../../../themes/types/list.type';
import { Theme } from '../../../themes/themeTypes';

const responsiveStyles = (breakpoints: ListTheme, item: 'li' | 'ul' | 'ol') => {
  return Object.keys(breakpoints).map((breakpoint) => {
    // @ts-ignore
    const breakpointStyles = breakpoints[breakpoint];
    if (breakpointStyles[item]) {
      const styles = css`
        ${item !== 'li'
          ? css`
              &:not(:first-child) {
                margin-top: ${breakpointStyles[item].marginTop};
              }

              &:not(:last-child) {
                margin-bottom: ${breakpointStyles[item].marginBottom};
              }
            `
          : css`
              margin-top: ${breakpointStyles[item].marginTop};
              margin-bottom: ${breakpointStyles[item].marginBottom};
            `}
        &:not(:first-child) {
          margin-top: ${breakpointStyles[item].marginTop};
        }

        &:not(:last-child) {
          margin-bottom: ${breakpointStyles[item].marginBottom};
        }

        font-size: ${breakpointStyles[item].fontSize};
        color: ${breakpointStyles[item].color};
      `;

      if (breakpoint === 'xs') return styles;
      return css`
        ${media(`${breakpoint}`)} {
          ${styles}
        }
      `;
    }
    return null;
  });
};

// eslint-disable-next-line no-undef
export const UnorderedList = styled.ul<{ theme: Theme }>`
  ${(props) => responsiveStyles(props.theme.list, 'ul')};
  list-style: ${(props) => props.theme.list.xs.ul.listStyle};
  margin-left: ${(props) => props.theme.list.xs.ul.marginLeft};

  > li {
    padding-left: ${(props) => props.theme.list.xs.li.paddingLeft};
    position: relative;

    &:before {
      content: '';
      background-color: ${(props) => props.theme.list.xs.disc?.color};
      width: 0.5em;
      height: 0.5em;
      border-radius: 50%;
      position: absolute;
      top: 0.6em;
      left: -0.72em;
    }

    > ul {
      margin-top: 0;
      margin-left: 1.125em;
      margin-bottom: 0;
    }
  }
`;

// eslint-disable-next-line no-undef
export const OrderedList = styled.ol<{ theme: Theme }>`
  position: relative;
  list-style: ${(props) => props.theme.list.xs.ol.listStyle};
  counter-reset: li-counter;
  ${(props) => responsiveStyles(props.theme.list, 'ol')};
  padding-left: ${(props) => props.theme.list.xs.ol.paddingLeft};

  li {
    position: relative;
    counter-increment: li-counter;

    &:before {
      color: ${(props) => props.theme.list.xs.counter?.color};
      content: counter(li-counter) '. ';
      font-weight: ${(props) => props.theme.list.xs.counter?.fontWeight};
      position: absolute;
      text-align: right;
      left: calc(-1 * 2em - 10px - 2px);
      width: 2em;
    }

    > ol {
      margin-top: 0;
      margin-bottom: 0;
      padding-left: 1.56em;
      counter-reset: li-alpha;

      > li {
        counter-increment: li-alpha;

        &:before {
          text-align: left;
          content: counter(li-alpha, lower-alpha) '. ';
          left: calc(-1 * 2em * 0.7 - 2px);
        }
      }
    }
  }
`;

export const ListItem = styled.li`
  ${(props) => responsiveStyles(props.theme.list, 'li')}
`;
