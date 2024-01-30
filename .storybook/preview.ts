import type { Preview } from '@storybook/react';

import '~/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      current: 'dark',
      stylePreview: true,
      darkClass: 'dark',
      classTarget: 'html',
    },
  },
};

export default preview;
