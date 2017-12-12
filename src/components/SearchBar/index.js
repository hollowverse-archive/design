/**
 * SearchBar Component
 */
import React from 'react';
import classNames from 'classnames';
import './styles.css';

const SearchBar = ({
  anim, margins, searchValue, autoFocus, onChange, onKeyDown,
}) => {
  const handleSearchFocus = e => e.target.select();

  return (
    <div className={classNames('search-bar', { anim, margins })}>
      <input
        type="text"
        className="navbar-search"
        value={searchValue}
        autoFocus={autoFocus}
        placeholder="Search..."
        onFocus={handleSearchFocus}
        onChange={onChange}
        onKeyDown={onKeyDown}
        maxLength={50}
      />
    </div>
  );
};

export default SearchBar;
