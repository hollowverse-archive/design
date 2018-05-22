/**
 * App Container
 */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { paths } from '../../constants';
import './styles.css';

export default class AppMenu extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    onLogin: PropTypes.func,
    onLogout: PropTypes.func,
    userName: PropTypes.string,
    userAvatar: PropTypes.string,
  }

  static defaultProps = {
    onLogin: undefined,
    onLogout: undefined,
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
      onLogin, userName, userAvatar,
    } = this.props;

    if (userName) {
      return (
        <button
          type="button"
          title="Login in with Facebook"
          aria-label="Login in with Facebook"
          className="app-menu-login-facebook"
          onClick={onLogin}
        >
          Login in
        </button>
      );
    }

    return (
      <Fragment>
        <div
          className="app-menu-user-avatar"
          style={{ backgroundImage: userAvatar ? `url(${userAvatar})` : undefined }}
        />
        <div className="app-menu-user-name">
          {userName}
        </div>
      </Fragment>
    );
  }

  get menuLinks() {
    const { userName, onLogout } = this.props;
    const isLoggedIn = !!userName;

    return (
      <div className="app-menu-links">
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
        {isLoggedIn &&
          <Fragment>
            <div className="separator" />
            <button
              type="button"
              className="app-menu-link"
              onClick={onLogout}
            >
              Log out
            </button>
          </Fragment>
        }
        <div className="separator" />
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
          {this.menuLinks}
          <div className="app-menu-footer">
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
            <div className="app-menu-copy">
              &copy; 2018 Hollowverse
            </div>
          </div>
        </div>
      </div>
    );
  }
}
