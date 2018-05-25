/**
 * Footnotes Component
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

const Footnote = ({ name, sourceName, url, backLink }) => (
  <li className="footnotes-item">
    <a href={url} target="_blank">
      {name}
    </a>{' '}
    {sourceName}{' '}
    <a className="back-link" href={backLink}>
      ↩
    </a>
  </li>
);

export default class Footnotes extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  state = {
    open: false,
  };

  get footnotes() {
    const { data } = this.props;

    return (
      <ol className="footnotes-body">
        {data.map(footnote => <Footnote key={footnote.id} {...footnote} />)}
      </ol>
    );
  }

  toggle = () => this.setState({ open: !this.state.open });

  render() {
    const { open } = this.state;

    return (
      <div className={classNames('footnotes', { open })}>
        <button type="buton" className="footnotes-title" onClick={this.toggle}>
          Sources
        </button>
        {open && this.footnotes}
      </div>
    );
  }
}
