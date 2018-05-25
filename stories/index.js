import React from 'react';
import { storiesOf } from '@storybook/react';
import App from '../src/App.js';

storiesOf('Homepage', module).add('Default', () => <App path="/" />);

storiesOf('Notable Person', module)
  .add('Default', () => <App path="/person" />)
  .add('No image', () => <App path="/person" showNotablePersonImage={false} />)
  .add('With loading animation', () => (
    <App path="/person" withLoading={true} />
  ));

storiesOf('Main Menu', module)
  .add('Default', () => <App path="/person" isMenuOpen={true} />)
  .add('Logged out', () => (
    <App path="/person" isMenuOpen={true} user={null} />
  ));

storiesOf('App', module).add('Error', () => <App showError={true} />);
