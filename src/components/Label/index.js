/**
 * Label Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

const Label = ({ text, small, dark }) => (
  <div className={classNames('label', { small, dark })}>
    {text}
  </div>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
  small: PropTypes.bool,
  dark: PropTypes.bool,
};

Label.defaultProps = {
  small: false,
  dark: false,
};

export default Label;
