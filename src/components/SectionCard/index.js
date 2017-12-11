/**
 * SectionCard Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const SectionCard = ({ title, content }) =>
  <div className="section-card">
    <div className="section-card-title">
      {title}
    </div>
    {content}
  </div>;

SectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default SectionCard;
