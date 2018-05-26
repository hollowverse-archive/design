import { configure } from '@storybook/react';

import {
  configureViewport,
  INITIAL_VIEWPORTS,
} from '@storybook/addon-viewport';

configureViewport({
  defaultViewport: 'iphone6',
  viewports: {
    iphone6: INITIAL_VIEWPORTS.iphone6,
    responsive: INITIAL_VIEWPORTS.responsive,
  },
});

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);
