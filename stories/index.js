import React from 'react';
import { storiesOf } from '@storybook/react';
// import App from '../src/components/App';
import { Home } from '../src/containers';

storiesOf('Homepage', module).add('Default', () => <Home />);
