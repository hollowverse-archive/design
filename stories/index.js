/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { storiesOf } from '@storybook/react';
import * as paths from '../src/constants/paths';
import { App } from '../src/App';

storiesOf('Homepage', module).add('Default', () => <App path={paths.HOME} />);

storiesOf('Notable Person', module)
  .add('Default', () => <App path={paths.NOTABLE_PERSON} />)
  .add('No image', () => (
    <App path={paths.NOTABLE_PERSON} showNotablePersonImage={false} />
  ))
  .add('With loading animation', () => (
    <App path={paths.NOTABLE_PERSON} withLoading={true} />
  ));

storiesOf('Main Menu', module)
  .add('Default', () => <App path={paths.NOTABLE_PERSON} isMenuOpen={true} />)
  .add('Logged out', () => (
    <App path={paths.NOTABLE_PERSON} isMenuOpen={true} user={null} />
  ));

storiesOf('Text pages', module)
  .add('Contact', () => <App path={paths.CONTACT} />)
  .add('About', () => <App path={paths.ABOUT} />);

storiesOf('App', module).add('Error', () => <App showError={true} />);
