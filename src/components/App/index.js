/**
 * App Container
 */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { paths } from '../../constants';
import { NavBar, ErrorMessage, Link } from '../../components';

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
  };

  static defaultProps = {
    backLink: undefined,
    searchValue: '',
    isSearchButton: false,
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
    const { backLink, children, searchValue, isSearchButton } = this.props;
    const { errorMessage, isSearchRedirect } = this.state;

    if (isSearchRedirect) {
      return <Link to={paths.SEARCH} />;
    }

    return (
      <Fragment>
        <NavBar
          backLink={backLink}
          searchValue={searchValue}
          isSearchButton={isSearchButton}
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
  }
}
