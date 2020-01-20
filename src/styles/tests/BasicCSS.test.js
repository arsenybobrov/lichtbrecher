import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import BasicCSS from '../BasicCSS';

it('CAUTION: BasicCSS can have an impact an different components, because it is global', () => {
  const css = renderer.create(BasicCSS.globalStyle.rules).toJSON();
  expect(css).toMatchSnapshot();
});
