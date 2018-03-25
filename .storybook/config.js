import { configure } from '@storybook/react';
import { configure as configureNative } from '@storybook/react-native';

// automatically import all files ending in *.stories.js
const req = require.context('../storybook', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
configureNative(loadStories, module);
