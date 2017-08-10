/**
 * App Container
 */
import React from 'react';
import NavBar from '../../components/NavBar';
import Person from '../Person';
import './styles.css';

const App = () => (
  <div className="app">
    <NavBar />
    <div className="app-view">
      <Person />
    </div>
  </div>
);

export default App;
