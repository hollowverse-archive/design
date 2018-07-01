/**
 * FbComments Component
 */
import React, { Component } from 'react';
import './styles.css';

export class FbComments extends Component {
  componentDidMount() {
    if (global.FB) {
      global.FB.XFBML.parse(document.getElementById('hv-root'));
    }
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
