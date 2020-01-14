import getLanguage from '../getLanguage';

describe('getLanguage', () => {
  it.each`
    name                                 | asPath   | expected
    ${'homepage DE should return de-de'} | ${'/'}   | ${'de-de'}
    ${'homepage EN should return en-gb'} | ${'/en'} | ${'en-gb'}
    ${'page DE should return de-de'} | ${'/ueber-uns'}   | ${'de-de'}
    ${'page EN should return en-gb'} | ${'/en/about'} | ${'en-gb'}
  `('$name', ({ asPath, expected }) => {
  expect(getLanguage(asPath)).toEqual(expected);
});
});
