/**
 * SearchNoResults container
 */
import React from 'react';
import { App } from '../../components/App/App';
import './styles.css';

export const SearchNoResults = () => (
  <App isSearchButton>
    <div className="search-no-results">{"We couldn't find anything"}</div>
  </App>
);
