/**
 * Label Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

const Label = ({ text, small }) => (
  <div className={classNames('label', { small })}>
    {text}
  </div>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

Label.defaultProps = {
  small: false,
};

export default Label;
