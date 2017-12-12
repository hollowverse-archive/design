/**
 * SearchNoResults container
 */
import React from 'react';
import { App } from '../../components';
import './styles.css';

const Search = () => (
  <App isSearchButton>
    <div className="search-no-results">
      {'We couldn\'t find anything'}
    </div>
  </App>
);

export default Search;

