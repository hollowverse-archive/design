/**
 * Button Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

export const Button = props => (
  <button
    type="button"
    className={classNames('button', {
      [props.className]: props.className,
    })}
    aria-label={props.label}
    title={props.label}
    onClick={props.onClick}
  >
    {props.label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: undefined,
  className: undefined,
  onClick: undefined,
};
