import type { Preview } from "@storybook/react";
import '../src/index.css';
// import '!style-loader!css-loader!postcss-loader!src/index.css';

import { withThemeByDataAttribute } from '@storybook/addon-themes';

export const decorators = [
	withThemeByDataAttribute({
		themes: {
			light: 'light',
			dark: 'dark',
		},
		defaultTheme: 'light',
		attributeName: 'data-mode',
	}),
];


const preview: Preview = {
  parameters: {
  
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
