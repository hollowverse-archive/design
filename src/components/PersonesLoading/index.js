/**
 * PersonesLoading Component
 */
import React from 'react';
import './styles.css';

const PersonesLoadingItem = () =>
  <div className="persones-loading-item" />;

const PersonesLoading = () => (
  <div className="persones-loading">
    {Array.from(Array(16), (item, index) => <PersonesLoadingItem key={index} />)}
  </div>
);

export default PersonesLoading;
