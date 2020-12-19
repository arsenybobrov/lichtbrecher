import getHeadingTag from '../getHeadingTag';

describe('getHeadingTag', () => {
  it.each`
    name        | input         | expected
    ${'return'} | ${'heading1'} | ${'h1'}
    ${'return'} | ${'heading2'} | ${'h2'}
    ${'return'} | ${'heading3'} | ${'h3'}
    ${'return'} | ${'heading4'} | ${'h4'}
    ${'return'} | ${'heading5'} | ${'h5'}
  `('$name $expected', ({ input, expected }) => {
    expect(getHeadingTag(input)).toStrictEqual(expected);
  });
});
