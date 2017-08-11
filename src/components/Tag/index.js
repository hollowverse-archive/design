/**
 * Tag Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Tag = props => (
  <div className="tag">
    {props.label}
  </div>
);

Tag.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Tag;
