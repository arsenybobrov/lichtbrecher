import isHomepage from '../isHomepage';

describe('isHomepage', () => {
  it.each`
    name              | asPath            | expected
    ${'is not a hp'}  | ${'/leistungen'}  | ${false}
    ${'is not a hp'}  | ${'/en/page'}     | ${false}
    ${'is not a hp'}  | ${'/en'}          | ${false}
    ${'is a hp'}      | ${'/en/'}         | ${true}
    ${'is a hp'}      | ${'/'}            | ${true}
  `('$name', ({ asPath, expected }) => {
  expect(isHomepage(asPath)).toStrictEqual(expected);
});
});
