import React from 'react';
import { storiesOf } from '@storybook/react';
import App from '../src/App.js';

storiesOf('Homepage', module).add('Default', () => <App path="/" />);

storiesOf('Notable Person', module).add('Default', () => (
  <App path="/person" />
));
