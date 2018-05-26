/**
 * Entry point of the App
 */
import React from 'react';
import { defaultsDeep } from 'lodash';

import { Home } from './containers/Home/Home';
import { NotablePerson } from './containers/NotablePerson/NotablePerson';
import { About } from './containers/About/About';
import { Contact } from './containers/Contact/Contact';
import { Provider, defaultState, createActions } from './state/state';
import * as paths from './constants/paths';

import './shared/styles/index.css';

/* eslint-disable */
(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');
/* eslint-enable */

export class App extends React.Component {
  static defaultProps = defaultState;

  static getDerivedStateFromProps(props, state) {
    return defaultsDeep(state, props);
  }

  actions = createActions(this.setState.bind(this));

  renderPath = () => {
    const { path } = this.state;

    switch (path) {
      case paths.HOME:
        return <Home />;
      case paths.NOTABLE_PERSON:
        return <NotablePerson />;
      case paths.ABOUT:
        return <About />;
      case paths.CONTACT:
        return <Contact />;
      default:
        return '🕷🐛🐜🐞';
    }
  };

  render() {
    return (
      <Provider
        value={{
          actions: this.actions,
          state: this.state,
        }}
      >
        {this.renderPath()}
      </Provider>
    );
  }
}
