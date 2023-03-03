import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { LazyMotion, domAnimation } from 'framer-motion';
import GlobalStyle from '../src/styles/GlobalStyle';
import { ThemeProvider } from '@mui/material';
import theme from '../src/styles/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
  backgrounds: {
    default: 'light',
  },
  docs: {
    source: { type: 'code' },
  },
};

export const decorators = [
  (Story) => (
    <div id="__next">
      <LazyMotion features={domAnimation}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      </LazyMotion>
    </div>
  ),
];
