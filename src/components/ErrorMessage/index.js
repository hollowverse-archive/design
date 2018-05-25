/**
 * ErrorMessage Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ErrorMessage = ({ message, action, actionLabel }) => (
  <div className="error-message">
    <div className="error-message-caption">{message}</div>
    {action && (
      <button type="button" className="error-message-button" onClick={action}>
        {actionLabel}
      </button>
    )}
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  action: PropTypes.func,
  actionLabel: PropTypes.string,
};

ErrorMessage.defaultProps = {
  action: undefined,
  actionLabel: undefined,
};

export default ErrorMessage;
