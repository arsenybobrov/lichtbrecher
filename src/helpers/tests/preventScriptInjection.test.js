import preventScriptInjection from '../preventScriptInjection';

describe('preventScriptInjection', () => {
  it.each`
    name                           | str                                                    | expected
    ${'string is not dangerous'}   | ${'hallo welt'}                                        | ${'hallo welt'}
    ${'string is dangerous!!!!!!'} | ${'<script>alert("burn in hell!")</script>hallo welt'} | ${'...'}
  `('$name', ({ str, expected }) => {
  expect(preventScriptInjection(str)).toEqual(expected);
});
});
