/**
 * Label Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

const Label = ({ text, compact, dark }) => (
  <div className={classNames('label', { compact, dark })}>{text}</div>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
  compact: PropTypes.bool,
  dark: PropTypes.bool,
};

Label.defaultProps = {
  compact: false,
  dark: false,
};

export default Label;
