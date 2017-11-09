/**
 * PersonLoading Component
 */
import React from 'react';
import './styles.css';

const PersonLoading = () => (
  <div className="person-loading">
    <div className="person-loading-gradient" />
    <div className="person-loading-avatar" />
    <div className="person-loading-caption" />
    <div className="person-loading-name" />
    <div className="person-loading-labels">
      <div className="person-loading-label" />
      <div className="person-loading-label" />
      <div className="person-loading-label" />
    </div>
    <div className="person-loading-paragraph" />
    <div className="person-loading-paragraph second" />
    <div className="person-loading-paragraph third" />
  </div>
);

export default PersonLoading;
