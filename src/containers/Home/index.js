/**
 * Home container
 */
import React from 'react';
import { data } from '../../constants';
import { PersonCard } from '../../components';
import './styles.css';

const PERSONES = [
  ...data.PERSONES,
  ...data.PERSONES.map(person => ({ ...person, id: `${person.id}-1` })),
  ...data.PERSONES.map(person => ({ ...person, id: `${person.id}-2` })),
];

const Home = () =>
  <div className="home">
    <div className="home-persones">
      {PERSONES.map(person =>
        <PersonCard
          key={person.id}
          {...person}
        />)
      }
    </div>
  </div>;

export default Home;

