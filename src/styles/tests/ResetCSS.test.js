import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import ResetCSS from '../ResetCSS';

it('CAUTION: ResetCSS can have an impact an different components, because it is global', () => {
  const css = renderer.create(ResetCSS.globalStyle.rules).toJSON();
  expect(css).toMatchSnapshot();
});
