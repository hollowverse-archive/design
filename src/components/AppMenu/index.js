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

  componentDidMount() {
    window.document.body.style.overflow = this.props.isOpen ? 'hidden' : 'auto';
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isOpen && nextProps.isOpen) {
      window.document.body.style.overflow = 'hidden';
    } else if (this.props.isOpen && !nextProps.isOpen) {
      window.document.body.style.overflow = 'auto';
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
      <div className="app-menu-user">
        <div
          className="app-menu-user-avatar"
          style={{ backgroundImage: `url(${userAvatar})` }}
        />
        <div className="app-menu-user-name">
          {userName}
          <button
            type="button"
            aria-label="Sign out"
            title="Sign out"
            className="app-menu-signout"
            onClick={onSignOut}
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  closeAndRemove = () => {
    this.setState({ isClosing: false });
    this.props.toggle();
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
          >
            Home
          </Link>
          <Link
            to={paths.ABOUT}
            className="app-menu-link"
          >
            About
          </Link>
          <Link
            to={paths.CONTACT}
            className="app-menu-link"
          >
            Contact
          </Link>
          <Link
            to={paths.PRIVACY_POLICY}
            className="app-menu-link"
          >
            Privacy Policy
          </Link>
          <Link
            to={paths.TERMS_OF_SERVICE}
            className="app-menu-link"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    );
  }
}
