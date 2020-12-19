import isClient from './isClient';

const getStyles = (id: string, property: string): string => {
  const elm = document.getElementById(id);
  if (isClient() && elm) {
    return window.getComputedStyle(elm, null).getPropertyValue(property);
  }
  return '';
}

export default getStyles;
