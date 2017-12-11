/**
 * Home container
 */
import React from 'react';
import { data } from '../../constants';
import { PersonCard } from '../../components';
import './styles.css';

const Home = () =>
  <div className="home">
    <div className="home-persones">
      {data.OTHER_PERSONES.map(person =>
        <PersonCard
          key={person.id}
          {...person}
        />)
      }
    </div>
  </div>;

export default Home;

