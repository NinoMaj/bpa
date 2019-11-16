import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme';

const req = require.context('../components/core', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

configure(loadStories, module);
