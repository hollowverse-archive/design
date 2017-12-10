/**
 * PersonesOther Component
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { data, paths } from '../../constants';
import { Label } from '../../components';
import './styles.css';

const renderLabel = (i, index) => <Label small key={index} text={i} />;

const Person = ({ name, photoUrl, labels }) =>
  <Link
    className="persones-other-item"
    to={paths.NOTABLE_PERSON}
  >
    <div
      className="persones-other-cover"
      style={{ backgroundImage: `url(${photoUrl})` }}
    />
    <div
      className="persones-other-avatar"
      style={{ backgroundImage: `url(${photoUrl})` }}
    />
    <div className="persones-other-name">
      {name}
    </div>
    <div className="persones-other-labels">
      {labels.map(renderLabel)}
    </div>
  </Link>;

const PersonesOther = () =>
  <div className="persones-other">
    <div className="persones-other-title">
      Other interesting profiles
    </div>
    <div className="persones-other-inner">
      {data.OTHER_PERSONES.map(person =>
        <Person
          key={person.id}
          {...person}
        />)
      }
    </div>
  </div>;

export default PersonesOther;
