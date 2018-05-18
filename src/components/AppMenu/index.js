/**
 * App Container
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { paths } from '../../constants';
import './styles.css';

export default class AppMenu extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    onSignIn: PropTypes.func,
    onSignOut: PropTypes.func,
    userName: PropTypes.string,
    userAvatar: PropTypes.string,
  }

  static defaultProps = {
    onSignIn: undefined,
    onSignOut: undefined,
    userName: undefined,
    userAvatar: undefined,
  }

  state = {
    isClosing: false,
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isOpen && nextProps.isOpen) {
      window.document.body.style.overflow = 'hidden';
    }
  }

  get user() {
    const {
      onSignIn, onSignOut, userName, userAvatar,
    } = this.props;

    if (!userName && !userAvatar) {
      return (
        <button
          type="button"
          title="Sign in With Facebook"
          aria-label="Sign in With Facebook"
          className="app-menu-signin-facebook"
          onClick={onSignIn}
        >
          Sign in With Facebook
        </button>
      );
    }

    return (
      <button
        type="button"
        aria-label="Sign out"
        title="Sign out"
        className="app-menu-signout"
        onClick={onSignOut}
      >
        Sign out
      </button>
    );
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

    if (!isOpen && !isClosing) {
      return null;
    }

    return (
      <div className={classNames('app-menu', { closing: isClosing })}>
        <button
          type="button"
          title="Close menu"
          aria-label="Close menu"
          className="app-menu-fade"
          onClick={this.handleClose}
        />
        <div className="app-menu-body">
          <button
            type="button"
            title="Close menu"
            aria-label="Close menu"
            className="app-menu-close"
            onClick={this.handleClose}
          />
          {this.user}
          <Link
            to={paths.HOME}
            className="app-menu-link"
            onClick={this.closeAndRemove}
          >
            Home
          </Link>
          <Link
            to={paths.ABOUT}
            className="app-menu-link"
            onClick={this.closeAndRemove}
          >
            About
          </Link>
          <Link
            to={paths.CONTACT}
            className="app-menu-link"
            onClick={this.closeAndRemove}
          >
            Contact
          </Link>
          <Link
            to={paths.PRIVACY_POLICY}
            className="app-menu-link"
            onClick={this.closeAndRemove}
          >
            Privacy Policy
          </Link>
          <Link
            to={paths.TERMS_OF_SERVICE}
            className="app-menu-link"
            onClick={this.closeAndRemove}
          >
            Terms of Service
          </Link>
        </div>
      </div>
    );
  }
}
