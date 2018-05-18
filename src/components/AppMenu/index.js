/**
 * App Container
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

export default class AppMenu extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
  }

  state = {
    isClosing: false,
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isOpen && nextProps.isOpen) {
      window.document.body.style.overflow = 'hidden';
    }
  }

  closeAndRemove = () => {
    this.setState({ isClosing: false });
    this.props.toggle();
    window.document.body.style.overflow = 'auto';
  }

  handleClose = () => {
    if (this.state.isClosing) {
      return;
    }

    this.setState({ isClosing: true }, () => {
      setTimeout(this.closeAndRemove, 200);
    });
  }

  render() {
    const { isClosing } = this.state;
    const { isOpen } = this.props;

    return (
      (isOpen || isClosing) ?
        <div className={classNames('app-menu', { closing: isClosing })}>
          <button
            type="button"
            className="app-menu-fade"
            onClick={this.handleClose}
          />
          <div className="app-menu-body">
            <button
              type="button"
              className="app-menu-close"
              onClick={this.handleClose}
            />
          </div>
        </div>
        :
        null
    );
  }
}
