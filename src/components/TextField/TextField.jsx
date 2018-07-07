/**
 * TextField Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

export const TextField = props => (
  <div
    className={classNames('text-field', {
      [props.className]: props.className,
    })}
  >
    <label>{props.label}</label>
    <textarea
      autoFocus={props.autoFocus}
      value={props.value}
      rows={props.rows}
      onChange={e => props.onChange(e.target.value)}
    />
  </div>
);

TextField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  rows: PropTypes.number,
  label: PropTypes.string,
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
};

TextField.defaultProps = {
  rows: 5,
  label: undefined,
  className: undefined,
  autoFocus: false,
};
