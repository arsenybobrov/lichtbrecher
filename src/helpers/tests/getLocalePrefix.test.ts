import getLocalePrefix from '../getLocalePrefix';

describe('getLocalePrefix', () => {
  it.each`
    name                                     | asPath                       | expected
    ${'return default'}                      | ${'/leistungen'}             | ${''}
    ${'return default'}                      | ${'/'}                       | ${''}
    ${'return en'}                           | ${'/en/services/service-xy'} | ${'en'}
    ${'return en'}                           | ${'/en/'}                    | ${'en'}
    ${'return en'}                           | ${'/en'}                     | ${'en'}
  `('$name', ({ asPath, expected }) => {
  expect(getLocalePrefix(asPath)).toStrictEqual(expected);
});
});
