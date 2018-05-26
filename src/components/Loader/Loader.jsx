/**
 * Loader Component
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './styles.css';

export const Loader = ({ small }) => (
  <div className={classNames('loader', { small })}>
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

Loader.propTypes = {
  small: PropTypes.bool,
};

Loader.defaultProps = {
  small: false,
};
