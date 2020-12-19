import { PrismicLink } from '../../prismic/types';

const checkLinkActiveState = (url: string, link?: PrismicLink): boolean => {
  const urlUid = url.substring(url.lastIndexOf('/') + 1);
  if (urlUid === link?.uid) return true;
  return false;
};

export default checkLinkActiveState;
