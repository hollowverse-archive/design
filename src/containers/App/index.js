/**
 * App Container
 */
import React, { Component } from 'react';
import { NavBar, ErrorMessage } from '../../components';
import { NotablePerson } from '../../containers';
import './styles.css';

const ERRORS = [
  'Notable Person is not found.',
  'Internet connection is lost or slow.',
  'Something is wrong on our end. Try again later.',
];

const getRandomError = () =>
  Math.random() >= 0.8 && ERRORS[Math.floor(Math.random() * ERRORS.length)];

export default class App extends Component {
  state = {
    isLoading: true,
    errorMessage: undefined,
  }

  componentDidMount() {
    // Emulate loading and error
    setTimeout(this.handleLoaded, (Math.random() * 1000) + 100);
  }

  handleLoaded = () => {
    this.setState({
      isLoading: false,
      errorMessage: getRandomError(),
    }, this.initFacebookSdk);
  }

  /* eslint-disable */
  initFacebookSdk() {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
  /* eslint-enable */

  render() {
    return ([
      <NavBar key={1} />,
      <div key={2} className="app-view">
        {this.state.errorMessage ?
          <ErrorMessage
            message={this.state.errorMessage}
            action={() => window.location.reload()}
            actionLabel="Reload the Page"
          />
        :
          <NotablePerson
            isLoading={this.state.isLoading}
          />}
      </div>,
    ]);
  }
}
