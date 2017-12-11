/**
 * Home container
 */
import React, { Component } from 'react';
import { data } from '../../constants';
import { App } from '../../containers';
import { PersonesLoading, PersonCard } from '../../components';
import './styles.css';

const PERSONES = [
  ...data.PERSONES,
  ...data.PERSONES.map(person => ({ ...person, id: `${person.id}-1` })),
  ...data.PERSONES.map(person => ({ ...person, id: `${person.id}-2` })),
];

export default class Home extends Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.loadingTimeout = setTimeout(this.handleLoaded, (Math.random() * 1000) + 100);
  }

  componentWillUnmount() {
    clearTimeout(this.loadingTimeout);
  }

  handleLoaded = () => this.setState({ isLoading: false });

  render() {
    return (
      <App>
        {this.state.isLoading ?
          <PersonesLoading />
          :
          <div className="home-persones">
            {PERSONES.map(person =>
              <PersonCard
                key={person.id}
                {...person}
              />)
            }
          </div>}
      </App>
    );
  }
}

