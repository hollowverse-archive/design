/**
 * App Container
 */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavBar } from '../../components/NavBar/NavBar';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { Consumer } from '../../state/state';

import './styles.css';

export class App extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    backLink: PropTypes.string,
    searchValue: PropTypes.string,
    isSearchButton: PropTypes.bool,
    isMenuButton: PropTypes.bool,
  };

  static defaultProps = {
    backLink: undefined,
    searchValue: '',
    isSearchButton: false,
    isMenuButton: false,
  };

  render() {
    const { children, searchValue, isSearchButton } = this.props;

    return (
      <Consumer>
        {({ state: { isMenuOpen, showError }, actions: { toggleMenu } }) => {
          return (
            <Fragment>
              <NavBar
                searchValue={searchValue}
                isSearchButton={isSearchButton}
                toggleMenu={toggleMenu}
                isMenuOpen={isMenuOpen}
                onSearch={this.handleSearch}
              />
              <div className="app-view">
                {!showError ? (
                  children
                ) : (
                  <ErrorMessage
                    message="Something is wrong on our end. Try again later."
                    action={() => window.location.reload()}
                    actionLabel="Reload the Page"
                  />
                )}
              </div>
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}
