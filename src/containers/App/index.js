/**
 * App Container
 */
import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import NotablePerson from '../NotablePerson';
import './styles.css';

export default class App extends Component {
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
  }

  render = () => (
    <div className="app">
      <NavBar />
      <NotablePerson />
    </div>
  );
}
