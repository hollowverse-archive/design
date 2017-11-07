/**
 * Entry point of the App
 */
import React from 'react';
import { render } from 'react-dom';
import { App } from './containers';
import './shared/styles/index.css';

render(<App />, document.getElementById('hv-root'));
