/**
 * SearchBar Component
 */
import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { paths, data } from '../../constants';
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
    } else if (searchValue && !newProps.searchValue) {
      this.setState({ open: false });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.loadingTimeout);
  }

  get searchBody() {
    const { searchValue } = this.props;

    return (
      <div className="search-bar-body">
        {data.PERSONES.map(({ id, name, photoUrl }) => (
          <Link
            key={id}
            to={paths.NOTABLE_PERSON}
          >
            <div
              className="search-bar-body-avatar"
              style={{ backgroundImage: `url(${photoUrl})` }}
            />
            {name}
          </Link>
        ))}
        <Link
          to={paths.SEARCH_NO_RESULTS}
          className="all-results"
        >
          {`See results for ${searchValue}`}
        </Link>
      </div>
    );
  }

  handleLoaded = () => this.setState({ isLoading: false, open: true });

  handleFocus = e => e.target.select();

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
          onFocus={this.handleFocus}
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
