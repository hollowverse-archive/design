/**
 * Entry point of the App
 */
import React from 'react';
import { paths, eventTypes } from './constants';
import * as Containers from './containers';
import { Provider } from './state';

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

export default class App extends React.Component {
  static getDerivedStateFromProps(props, state) {
    return {
      path: state.path || props.path,
    };
  }

  state = {
    path: null,
  };

  setPath = path => {
    this.setState({ path });
  };

  renderPath = () => {
    const { path } = this.state;

    if (path === '/') {
      return <Containers.Home />;
    } else if (path === '/person') {
      return <Containers.NotablePerson />;
    }

    return null;
  };

  render() {
    return (
      <Provider
        value={{
          actions: {
            setPath: this.setPath,
          },
          state: this.state,
        }}
      >
        {this.renderPath()}
      </Provider>
    );
  }
}
