export const breakpoints = {
  xs: 576,
  sm: 768,
  md: 991,
  lg: 992,
  xl: 1200,
  xxl: 1700,
};

const mq = {
  xs: `max-width: ${breakpoints.xs}px`,
  smUp: `min-width: ${breakpoints.xs + 1}px`,
  sm: `min-width: ${breakpoints.xs + 1}px) and (max-width: ${breakpoints.sm}px`,
  smDown: `max-width: ${breakpoints.sm}px`,
  mdUp: `min-width: ${breakpoints.sm + 1}px`,
  md: `min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md}px`,
  mdDown: `max-width: ${breakpoints.md}px`,
  lgUp: `min-width: ${breakpoints.lg}px`,
  lg: `min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl - 1}px`,
  lgDown: `max-width: ${breakpoints.xl - 1}px`,
  xl: `min-width: ${breakpoints.xl}px`,
  xxl: `min-width: ${breakpoints.xxl}px`,
};

export default mq;
