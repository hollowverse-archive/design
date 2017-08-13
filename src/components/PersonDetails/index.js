/**
 * PersonDetails Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import * as strings from '../../constants/UIStrings';
<<<<<<< HEAD
import Label from '../Label';
import './styles.css';

const renderLabel = (i, index) => <Label key={index} text={i} />;
=======
import Tag from '../Tag';
import './styles.css';

const renderTag = (i, index) => <Tag key={index} label={i} />;
>>>>>>> upstream/master

const renderParagraph = (i, index) => <p key={index}>{i}</p>;

const PersonDetails = props => (
  <div className="person-details">
<<<<<<< HEAD
    <div
      className="person-details-avatar"
      style={{ backgroundImage: `url(${props.photoUrl})` }}
=======
    <img
      className="person-details-avatar"
      alt={props.name}
      src={`assets/${props.avatar}`}
>>>>>>> upstream/master
    />
    <div className="person-details-caption">
      {strings.RELIGION_POLITICS_AND_IDEAS_OF}
    </div>
    <div className="person-details-name">
      {props.name}
    </div>
<<<<<<< HEAD
    <div className="person-details-labels">
      {props.labels.map(renderLabel)}
=======
    <div className="person-details-tags">
      {props.tags.map(renderTag)}
>>>>>>> upstream/master
    </div>
    <div className="person-details-about">
      {props.about.map(renderParagraph)}
    </div>
  </div>
);

PersonDetails.propTypes = {
  name: PropTypes.string.isRequired,
<<<<<<< HEAD
  photoUrl: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string),
=======
  avatar: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
>>>>>>> upstream/master
  about: PropTypes.arrayOf(PropTypes.string),
};

export default PersonDetails;

