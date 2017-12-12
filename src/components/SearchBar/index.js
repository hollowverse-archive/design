/**
 * SearchBar Component
 */
import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';
import { Loader } from '../../components';
import './styles.css';

export default class SearchBar extends Component {
  state = {
    isLoading: false,
    open: false,
  }

  componentWillReceiveProps(newProps) {
    const { searchValue } = this.props;

    if (!searchValue && newProps.searchValue) {
      this.setState({ isLoading: true, open: false });
      this.loadingTimeout = setTimeout(this.handleLoaded, (Math.random() * 1000) + 500);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.loadingTimeout);
  }

  get searchBody() {
    const { searchValue } = this.props;

    return (
      <div className="search-bar-body">
        <Link to={paths.SEARCH}>
          {`See results for ${searchValue}`}
        </Link>
      </div>
    );
  }

  handleLoaded = () => this.setState({ isLoading: false, open: true });

  handleSearchFocus = e => e.target.select();

  render() {
    const {
      anim, margins, searchValue, autoFocus, onChange, onKeyDown,
    } = this.props;

    const { isLoading, open } = this.state;

    return (
      <div className={classNames('search-bar', { anim, margins, loading: isLoading })}>
        <input
          type="text"
          className="search-bar-input"
          value={searchValue}
          autoFocus={autoFocus}
          placeholder="Search..."
          onFocus={this.handleSearchFocus}
          onChange={onChange}
          onKeyDown={onKeyDown}
          maxLength={50}
        />
        {isLoading && <Loader small />}
        {open > 0 && this.searchBody}
      </div>
    );
  }
}
