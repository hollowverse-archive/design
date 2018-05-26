/**
 * PersonesOther Component
 */
import React from 'react';
import { PERSONES } from '../../constants/tempData';
import { PersonCard } from '../../components/PersonCard/PersonCard';
import './styles.css';

export const PersonesOther = () => (
  <div className="persones-other">
    <div className="persones-other-title">Other interesting profiles</div>
    <div className="persones-other-inner">
      {PERSONES.slice(2, 7).map(person => (
        <PersonCard key={person.id} {...person} />
      ))}
    </div>
  </div>
);
