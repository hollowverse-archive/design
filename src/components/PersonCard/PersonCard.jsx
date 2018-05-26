/**
 * PersonCard Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../components/Link/Link';
import * as paths from '../../constants/paths';
import { PersonImage } from '../../components/PersonImage/PersonImage';
import './styles.css';

export const PersonCard = ({ name, photoUrl }) => (
  <Link className="person-card" to={paths.NOTABLE_PERSON}>
    <PersonImage url={photoUrl} />
    <div className="person-card-name">{name}</div>
  </Link>
);

PersonCard.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
};
