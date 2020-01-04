const linkResolver = (doc) => {
  if (doc.type !== 'homepage') {
    return `/${doc.uid}`;
  }
  return '/';
};

export default linkResolver;
