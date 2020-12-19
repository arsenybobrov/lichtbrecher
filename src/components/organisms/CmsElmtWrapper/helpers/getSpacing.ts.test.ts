import getSpacing from './getSpacing';
import defaultTheme from '../../../../themes/default';

describe('getSpacing', () => {
  it.each`
    name                                      | sliceName                    | nextSlice                   | expected
    ${'xl spacing must be 0'}                    | ${'01_intro_image_text'}     | ${undefined}                | ${0}
    ${'xl spacing must be default'}              | ${'01_intro_image_text'}     | ${'some_funky_component'}   | ${defaultTheme.spacing.xl.default}
    ${'xl spacing must be default'}              | ${'some_funky_component'}    | ${'some_funky_component'}   | ${defaultTheme.spacing.xl.default}
    ${'xl spacing must be default'}              | ${'some_funky_component'}    | ${'01_intro_image_text'}    | ${defaultTheme.spacing.xl.default}
    ${'xl spacing must be as defined in theme'}  | ${'01_intro_image_text'}     | ${'01_intro_image_text'}    | ${defaultTheme.spacing.xl.cmsElements['01_intro_image_text']['01_intro_image_text']}
  `('$name', ({ sliceName, nextSlice, expected }) => {
    expect(getSpacing('xl',  sliceName, nextSlice)).toStrictEqual(expected);
  });
  it.each`
    name                                      | sliceName                    | nextSlice                   | expected
    ${'xs spacing must be 0'}                    | ${'01_intro_image_text'}     | ${undefined}                | ${0}
    ${'xs spacing must be default'}              | ${'01_intro_image_text'}     | ${'some_funky_component'}   | ${defaultTheme.spacing.xs.default}
    ${'xs spacing must be default'}              | ${'some_funky_component'}    | ${'some_funky_component'}   | ${defaultTheme.spacing.xs.default}
    ${'xs spacing must be default'}              | ${'some_funky_component'}    | ${'01_intro_image_text'}    | ${defaultTheme.spacing.xs.default}
    ${'xs spacing must be as defined in theme'}  | ${'01_intro_image_text'}     | ${'01_intro_image_text'}    | ${defaultTheme.spacing.xs.cmsElements['01_intro_image_text']['01_intro_image_text']}
  `('$name', ({ sliceName, nextSlice, expected }) => {
    expect(getSpacing('xs',  sliceName, nextSlice)).toStrictEqual(expected);
  });
});
