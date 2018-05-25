/**
 * NavBar Component
 */
import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { paths } from '../../constants';
import { AppMenu, NavBarSearch, Link } from '../../components';
import './styles.css';

export default class NavBar extends Component {
  static propTypes = {
    backLink: PropTypes.string,
    searchValue: PropTypes.string,
    onSearch: PropTypes.func,
    isSearchButton: PropTypes.bool,
    toggleMenu: PropTypes.func,
    isMenuOpen: PropTypes.bool,
  };

  static defaultProps = {
    backLink: undefined,
    searchValue: undefined,
    onSearch: () => {},
    isSearchButton: false,
    toggleMenu: undefined,
    isMenuOpen: false,
  };

  state = {
    isSearch: false,
    isSearchAutoFocus: false,
    searchValue: '',
    anim: false,
  };

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ searchValue: this.props.searchValue });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { isSearch } = this.state;

    if (!isSearch && window.scrollY > 250) {
      this.setState({ isSearch: true, anim: true });
    } else if (isSearch && window.scrollY < 250) {
      this.setState({
        isSearch: false,
        isSearchAutoFocus: false,
        anim: true,
      });
    }
  };

  handleSearchChange = e => this.setState({ searchValue: e.target.value });

  handleSearchKeyDown = e => {
    if (e.keyCode === 13) {
      e.target.blur();
      this.props.onSearch(this.state.searchValue);
    } else if (e.keyCode === 27) {
      this.setState({
        isSearch: false,
        isSearchAutoFocus: false,
      });
    }
  };

  handleSearchButtonClick = () => {
    this.setState({
      isSearch: true,
      isSearchAutoFocus: true,
      anim: true,
    });
  };

  render() {
    const { backLink, isSearchButton, toggleMenu, isMenuOpen } = this.props;
    const { anim, isSearch, searchValue, isSearchAutoFocus } = this.state;

    return (
      <Fragment>
        <div className="navbar">
          <div className="navbar-inner">
            {!toggleMenu &&
              backLink && (
                <Link type="button" className="navbar-btn back" to={backLink} />
              )}
            {!!toggleMenu && (
              <button
                type="button"
                className="navbar-btn menu"
                title="Open menu"
                aria-label="Open menu"
                onClick={toggleMenu}
              />
            )}
            <AppMenu isOpen={isMenuOpen} toggle={toggleMenu} />
            {isSearch ? (
              <NavBarSearch
                anim={anim}
                margins={!!backLink || !!toggleMenu}
                searchValue={searchValue}
                autoFocus={isSearchAutoFocus}
                onChange={this.handleSearchChange}
                onKeyDown={this.handleSearchKeyDown}
                onBlur={this.handleScroll}
              />
            ) : (
              <Link
                to={paths.HOME}
                className={classNames('navbar-logo', { anim })}
              />
            )}
            {!isSearch &&
              isSearchButton && (
                <button
                  type="button"
                  className={classNames('navbar-btn search', { anim })}
                  onClick={this.handleSearchButtonClick}
                />
              )}
          </div>
        </div>
      </Fragment>
    );
  }
}
