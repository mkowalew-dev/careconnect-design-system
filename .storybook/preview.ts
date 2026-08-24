import type { Preview } from '@storybook/react-vite';
import '../src/styles/global.css';
import '../src/styles/tokens.css';

const preview: Preview = {
  parameters: {
    a11y: {
      // 'todo' — show violations in the test UI without failing CI builds
      test: 'todo',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        clinical: { name: 'clinical', value: '#F8FAFB' },
        white: { name: 'white', value: '#FFFFFF' },
        dark: { name: 'dark', value: '#1A2332' }
      }
    },
  },

  initialGlobals: {
    backgrounds: {
      value: 'clinical'
    }
  }
};

export default preview;
