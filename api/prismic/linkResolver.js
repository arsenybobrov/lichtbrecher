export const linkResolver = (doc) => {
  if (doc.type !== 'homepage') {
    return `/${doc.uid}`;
  }
  return '/';
};

export const hrefResolver = (doc) => {
  if (doc.type !== 'homepage') {
    return `/${doc.uid}`;
  }
  return '/';
};
