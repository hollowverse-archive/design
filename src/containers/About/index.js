/**
 * About container
 */
import React, { Component } from 'react';
import { App, TextPage, Footer } from '../../components';

export default class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    window.document.title = 'About | Hollowverse';
  }

  render() {
    return (
      <App
        isSearchButton
        isMenuButton
      >
        <TextPage>
          <h1>About</h1>
          <p>
            It is often said that one should avoid discussing politics or
            religion in polite company. But these are some of the most
            interesting topics and I hope I can get you talking about them!
          </p>
          <p>
            Email me at <a href="mailto:msafi@msafi.com">msafi@msafi.com</a> if
            you’d like to discuss anything.
          </p>
        </TextPage>
        <Footer />
      </App>
    );
  }
}

