/**
 * App Container
 */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { paths } from '../../constants';
import { NavBar, ErrorMessage, Link } from '../../components';
import { Consumer } from '../../state';

import './styles.css';

export default class App extends Component {
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

  state = {
    errorMessage: undefined,
    isSearchRedirect: false,
  };

  componentDidCatch() {
    this.setState({
      errorMessage: 'Something is wrong on our end. Try again later.',
    });
  }

  handleSearch = () => {
    this.setState({ isSearchRedirect: true });
  };

  render() {
    const {
      backLink,
      children,
      searchValue,
      isSearchButton,
      isMenuButton,
    } = this.props;
    const { errorMessage, isSearchRedirect, isMenuOpen } = this.state;

    if (isSearchRedirect) {
      return <Link to={paths.SEARCH} />;
    }

    return (
      <Consumer>
        {({ state: { isMenuOpen }, actions: { toggleMenu } }) => {
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
                {!errorMessage ? (
                  children
                ) : (
                  <ErrorMessage
                    message={errorMessage}
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
