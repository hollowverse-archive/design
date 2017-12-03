/**
 * FbComments Component
 */
import React, { Component } from 'react';
import './styles.css';

export default class FbComments extends Component {
  componentDidMount() {
    /* eslint-disable no-undef */
    if (FB) {
      FB.XFBML.parse(document.getElementById('hv-root'));
    }
    /* eslint-enable no-undef */
  }

  render() {
    return (
      <div className="fb-comments-container">
        <div
          width="100%"
          className="fb-comments"
          data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
          data-numposts="5"
        />
      </div>
    );
  }
}
