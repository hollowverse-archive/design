/**
 * App Container
 */
import React, { Component } from 'react';
import { NavBar } from '../../components';
import { NotablePerson } from '../../containers';
import './styles.css';

export default class App extends Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    // Init Facabook SDK
    /* eslint-disable */
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    /* eslint-enable */

    // Emulate loading
    setTimeout(
      () => this.setState({ isLoading: false }),
      (Math.random() * 1000) + 100,
    );
  }

  render() {
    return ([
      <NavBar key={1} />,
      <div key={2} className="app-view">
        <NotablePerson
          isLoading={this.state.isLoading}
        />
      </div>,
    ]);
  }
}
