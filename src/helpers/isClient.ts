const isClient = (): boolean => (
  typeof window !== 'undefined'
);

export default isClient;
