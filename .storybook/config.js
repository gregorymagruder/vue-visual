import { configure, addParameters } from '@storybook/vue';

// Option defaults:
addParameters({
  options: {
    name: 'Vue Visual',
    url: 'https://github.com/BKWLD/vue-visual',
  }
})

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
