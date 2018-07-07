/**
 * Modal Component
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

export class Modal extends Component {
  static propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    className: undefined,
    onClose: undefined,
  };

  componentDidMount() {
    window.document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.document.body.style.overflow = 'auto';
  }

  render() {
    return (
      <div
        className={classNames('modal', {
          [this.props.className]: this.props.className,
        })}
      >
        <button
          type="button"
          onClick={this.props.onClose}
          aria-label="Close"
          className="modal-bg"
        />
        <div className="modal-body">{this.props.children}</div>
      </div>
    );
  }
}
