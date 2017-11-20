/**
 * Loader Component
 */
import React from 'react';
import './styles.css';

const Loader = () => (
  <div className="loader">
    <svg className="loader-circular" viewBox="25 25 50 50">
      <circle
        className="loader-path"
        cx="50"
        cy="50"
        r="20"
        fill="none"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
    </svg>
  </div>
);


export default Loader;
