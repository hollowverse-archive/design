/**
 * Section Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Section = ({ children }) =>
  <div className="section">
    {children}
  </div>;

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Section;
