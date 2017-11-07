/**
 * ErrorMessage Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ErrorMessage = ({ title, message }) => (
  <div className="error-message">
    <div className="error-message-title">
      {title}
    </div>
    <div className="error-message-caption">
      {message}
    </div>
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ErrorMessage;
