import getLocalePrefix from './getLocalePrefix';

const isHomepage = (asPath: string) => {
  if (
    asPath === '/' ||
    asPath === `/${getLocalePrefix(asPath)}/`
  ) {
    return true;
  }
  return false;
};

export default isHomepage;
