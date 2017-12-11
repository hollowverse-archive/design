/**
 * Home container
 */
import React, { Component, Fragment } from 'react';
import { data } from '../../constants';
import { App } from '../../containers';
import { PersonesLoading, PersonCard, Pagination } from '../../components';
import './styles.css';

const PERSONES = [
  ...data.PERSONES,
  ...data.PERSONES.map(person => ({ ...person, id: `${person.id}-1` })),
  ...data.PERSONES.map(person => ({ ...person, id: `${person.id}-2` })),
];

export default class Home extends Component {
  state = {
    isLoading: true,
    pages: Array.from(Array(39), (item, index) => ({ id: index })),
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
    const { isLoading, pages } = this.state;
    return (
      <App>
        {isLoading ?
          <PersonesLoading />
          :
          <Fragment>
            <div className="home-persones">
              {PERSONES.map(person =>
                <PersonCard
                  key={person.id}
                  {...person}
                />)
              }
            </div>
            <Pagination
              items={pages}
              onChangePage={this.handleChangePage}
            />
          </Fragment>
        }
      </App>
    );
  }
}

