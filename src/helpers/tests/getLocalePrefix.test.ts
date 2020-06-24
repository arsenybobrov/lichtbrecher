import getLocalePrefix from '../getLocalePrefix';

describe('getLocalePrefix', () => {
  it.each`
    name                                     | asPath                       | expected
    ${'return default'}                      | ${'/leistungen'}             | ${''}
    ${'return en'}                           | ${'/en/services/service-xy'} | ${'en'}
  `('$name', ({ asPath, expected }) => {
  expect(getLocalePrefix(asPath)).toStrictEqual(expected);
});
});
