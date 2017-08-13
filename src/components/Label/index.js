/**
 * Label Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Label = props => (
  <div className="label">
    {props.text}
  </div>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Label;
