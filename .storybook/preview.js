import StylesWrapper from '../src/styles/StylesWrapper';
import React from 'react';
import * as nextImage from 'next/image';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import BreakpointProviderWrapper from '../src/contexts/breakpoint/BreakpointProviderWrapper';
import { SharedContentProvider } from '../src/contexts/sharedContent/SharedContentContext';
import { sharedDataMock } from './mocks/StorybookMocks';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    return <img {...props} />;
  },
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  layout: 'fullscreen',
};

export const decorators = [
  (Story) => (
    <StylesWrapper>
      <BreakpointProviderWrapper>
        <SharedContentProvider value={sharedDataMock}>
          <Story />
        </SharedContentProvider>
      </BreakpointProviderWrapper>
    </StylesWrapper>
  ),
];
