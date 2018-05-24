/**
 * PersonesOther Component
 */
import React from 'react';
import { data } from '../../constants';
import { PersonCard } from '../../components';
import './styles.css';

const PersonesOther = () =>
  <div className="persones-other">
    <div className="persones-other-title">
      Other interesting profiles
    </div>
    <div className="persones-other-inner">
      {data.PERSONES.slice(2, 7).map(person =>
        <PersonCard
          key={person.id}
          {...person}
        />)
      }
    </div>
  </div>;

export default PersonesOther;
