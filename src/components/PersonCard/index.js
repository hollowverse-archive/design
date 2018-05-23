/**
 * PersonCard Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';
import './styles.css';

const PersonCard = ({ name, photoUrl }) => (
  <button className="person-card" to={paths.NOTABLE_PERSON}>
    <div
      className="person-card-avatar"
      style={{ backgroundImage: `url(${photoUrl})` }}
    />
    <div className="person-card-name">{name}</div>
  </button>
);

PersonCard.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
};

export default PersonCard;
