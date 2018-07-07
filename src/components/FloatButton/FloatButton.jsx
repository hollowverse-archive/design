/**
 * FloatButton Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

export const FloatButton = props => (
  <button
    className={classNames('float-button', {
      [props.className]: props.className,
    })}
    aria-label={props.label}
    title={props.label}
    onClick={props.onClick}
  >
    {props.label}
  </button>
);

FloatButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

FloatButton.defaultProps = {
  label: undefined,
  className: undefined,
  onClick: undefined,
};
