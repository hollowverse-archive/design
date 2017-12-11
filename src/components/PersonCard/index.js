/**
 * PersonCard Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Label } from '../../components';
import { paths } from '../../constants';
import './styles.css';

const renderLabel = (label, index) => (
  <Label small key={index} text={label} />
);

const PersonCard = ({ name, photoUrl, labels }) => (
  <Link
    className="person-card"
    to={paths.NOTABLE_PERSON}
  >
    <div
      className="person-card-cover"
      style={{ backgroundImage: `url(${photoUrl})` }}
    />
    <div
      className="person-card-avatar"
      style={{ backgroundImage: `url(${photoUrl})` }}
    />
    <div className="person-card-name">
      {name}
    </div>
    <div className="person-card-labels">
      {labels.map(renderLabel)}
    </div>
  </Link>
);

PersonCard.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  labels: PropTypes.array,
};

PersonCard.defaultProps = {
  labels: [],
};

export default PersonCard;
