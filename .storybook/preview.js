import StylesWrapper from '../src/styles/StylesWrapper';
import defaultTheme from '../src/themes/default';
import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}

export const decorators = [
  (Story) => (
    <StylesWrapper theme={defaultTheme}>
      <Story />
    </StylesWrapper>
  ),
];
