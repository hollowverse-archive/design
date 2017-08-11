/**
 * PersonDetails Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import * as strings from '../../constants/UIStrings';
import Tag from '../Tag';
import './styles.css';

const renderTag = (i, index) => <Tag key={index} label={i} />;

const renderParagraph = (i, index) => <p key={index}>{i}</p>;

const PersonDetails = props => (
  <div className="person-details">
    <img
      className="person-details-avatar"
      alt={props.name}
      src={`assets/${props.avatar}`}
    />
    <div className="person-details-caption">
      {strings.RELIGION_POLITICS_AND_IDEAS_OF}
    </div>
    <div className="person-details-name">
      {props.name}
    </div>
    <div className="person-details-tags">
      {props.tags.map(renderTag)}
    </div>
    <div className="person-details-about">
      {props.about.map(renderParagraph)}
    </div>
  </div>
);

PersonDetails.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  about: PropTypes.arrayOf(PropTypes.string),
};

export default PersonDetails;

