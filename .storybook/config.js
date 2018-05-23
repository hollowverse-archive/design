import { configure } from '@storybook/react';

import {
  configureViewport,
  INITIAL_VIEWPORTS,
} from '@storybook/addon-viewport';

configureViewport({
  viewports: {
    iphone6: INITIAL_VIEWPORTS.iphone6,
    responsive: INITIAL_VIEWPORTS.responsive,
  },
});

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
