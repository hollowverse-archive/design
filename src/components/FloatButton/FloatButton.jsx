/**
 * FloatButton Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

export const FloatButton = props => (
  <button
    type="button"
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
  className: PropTypes.string,
  onClick: PropTypes.func,
};

FloatButton.defaultProps = {
  label: undefined,
  className: undefined,
  onClick: undefined,
};
