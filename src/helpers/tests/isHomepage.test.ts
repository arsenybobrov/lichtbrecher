import isHomepage from '../isHomepage';

// trailing slashes are atomaticly redirected. eg /en/ is redirected to /en

describe('isHomepage', () => {
  it.each`
    name              | asPath            | expected
    ${'is not a hp'}  | ${'/leistungen'}  | ${false}
    ${'is not a hp'}  | ${'/en/page'}     | ${false}
    ${'is a hp'}      | ${'/en/'}         | ${false}
    ${'is a hp'}      | ${'/en'}          | ${true}
    ${'is a hp'}      | ${'/'}            | ${true}
  `('$name', ({ asPath, expected }) => {
  expect(isHomepage(asPath)).toStrictEqual(expected);
});
});
