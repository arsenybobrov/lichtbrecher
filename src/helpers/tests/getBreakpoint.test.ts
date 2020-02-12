import getBreakpoint from '../getBreakpoint';

describe('getBreakpoint', () => {
  it.each`
    name                                | width | expected
    ${'window width 320px should return XS'} | ${320} | ${'xs'}
    ${'window width 577px should return SM'} | ${577} | ${'sm'}
    ${'window width 800px should return MD'} | ${800} | ${'md'}
    ${'window width 1000px should return LG'} | ${1000} | ${'lg'}
    ${'window width 1400px should return LG'} | ${1400} | ${'xl'}
    ${'window width 1900px should return XXL'} | ${1900} | ${'xxl'}
  `('$name', ({ width, expected }) => {
    // @ts-ignore
    window.innerWidth = width;
  expect(getBreakpoint()).toStrictEqual(expected);
});
});
