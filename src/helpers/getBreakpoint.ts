import { breakpoints } from '../styles/mediaQueries';
import isClient from './isClient';

const currentBreakpoint = (width: number): string => {
  if (width <= breakpoints.xs - 1) {
    return 'xs';
  }
  if (width >= breakpoints.xs && width < breakpoints.sm) {
    return 'sm';
  }
  if (width >= breakpoints.sm && width < breakpoints.md) {
    return 'md';
  }
  if (width >= breakpoints.lg && width < breakpoints.xl) {
    return 'lg';
  }
  if (width >= breakpoints.xl && width < breakpoints.xxl) {
    return 'xl';
  }
  return 'xxl';
};

const getBreakpoint = (): string => {
  if (isClient()) {
    return currentBreakpoint(window.innerWidth);
  }

  return 'xs';
};

export default getBreakpoint;
