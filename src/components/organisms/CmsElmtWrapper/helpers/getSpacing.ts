import defaultTheme from '../../../../themes/default';

const getSpacing = (
  breakpoint: 'xl' | 'xs',
  sliceName: string,
  nextSlice?: string
): number => {
  const { spacing } = defaultTheme;
  let margin = 0;

  if (nextSlice && spacing[breakpoint].cmsElements[sliceName]?.[nextSlice]) {
    margin = spacing[breakpoint].cmsElements[sliceName][nextSlice];
  }

  if (nextSlice && !spacing[breakpoint].cmsElements[sliceName]?.[nextSlice]) {
    margin = spacing[breakpoint].default;
  }

  return margin;
};

export default getSpacing;
