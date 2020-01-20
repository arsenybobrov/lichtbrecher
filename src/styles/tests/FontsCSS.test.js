import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import FontsCSS from '../FontsCSS';

it('CAUTION: FontsCSS can have an impact an different components, because it is global', () => {
  const css = renderer.create(FontsCSS.globalStyle.rules).toJSON();
  expect(css).toMatchSnapshot();
});
