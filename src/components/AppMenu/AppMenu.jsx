/**
 * App Container
 */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from '../../components/Link/Link';
import * as paths from '../../constants/paths';
import { Consumer } from '../../state/state';

import './styles.css';

export class AppMenu extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    onLogin: PropTypes.func,
    onLogout: PropTypes.func,
    userName: PropTypes.string,
    userAvatar: PropTypes.string,
  };

  static defaultProps = {
    onLogin: undefined,
    onLogout: undefined,
    userName: undefined,
    userAvatar: undefined,
  };

  state = {
    isClosing: false,
  };

  componentDidMount() {
    window.document.body.style.overflow = this.props.isOpen ? 'hidden' : 'auto';
  }

  /* eslint-disable camelcase */
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.isOpen && nextProps.isOpen) {
      window.document.body.style.overflow = 'hidden';
    } else if (this.props.isOpen && !nextProps.isOpen) {
      window.document.body.style.overflow = 'auto';
    }
  }
  /* eslint-enable camelCase */

  user(user) {
    if (!user) {
      return undefined;
    }

    return (
      <Fragment>
        <div
          className="app-menu-user-avatar"
          style={{
            backgroundImage: user.avatar ? `url(${user.avatar})` : undefined,
          }}
        />
        <div className="app-menu-user-name">{user.name}</div>
      </Fragment>
    );
  }

  menuLinks(user) {
    const { onLogout, onLogin } = this.props;
    const isLoggedIn = !!user;

    return (
      <div className="app-menu-links">
        <Link to={paths.HOME} className="app-menu-link">
          Home
        </Link>
        <Link to={paths.CONTACT} className="app-menu-link">
          Contact
        </Link>
        <div className="separator" />
        {isLoggedIn && (
          <button type="button" className="app-menu-link" onClick={onLogout}>
            Log out
          </button>
        )}
        {!isLoggedIn && (
          <button
            type="button"
            className="app-menu-link app-menu-link-facebook"
            onClick={onLogin}
          >
            Log in with Facebook
          </button>
        )}
        <div className="separator" />
      </div>
    );
  }

  closeAndRemove = () => {
    this.setState({ isClosing: false });
    this.props.toggle();
  };

  handleClose = () => {
    if (this.state.isClosing) {
      return;
    }

    this.setState({ isClosing: true }, () => {
      setTimeout(this.closeAndRemove, 200);
    });
  };

  render() {
    const { isClosing } = this.state;
    const { isOpen } = this.props;

    if (!isOpen && !isClosing) {
      return null;
    }

    return (
      <Consumer>
        {({ state: { user } }) => {
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
                {this.user(user)}
                {this.menuLinks(user)}
                <div className="app-menu-footer">
                  <Link to={paths.PRIVACY_POLICY} className="app-menu-link">
                    Privacy Policy
                  </Link>
                  <div className="app-menu-copy">&copy; 2018 Hollowverse</div>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
