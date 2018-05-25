/**
 * Home container
 */
import React, { Component, Fragment } from 'react';
import { data } from '../../constants';
import { App, PersonesLoading, PersonCard, Pagination } from '../../components';
import './styles.css';

const PERSONES = [
  ...data.PERSONES,
  ...data.PERSONES.map(person => ({ ...person, id: `${person.id}-1` })),
  ...data.PERSONES.map(person => ({ ...person, id: `${person.id}-2` })).slice(
    0,
    -1,
  ),
];

export default class Home extends Component {
  state = {
    isLoading: true,
    currentPage: 1,
    totalPages: 39,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    window.document.title = 'Hollowverse';
    this.loadingTimeout = setTimeout(
      this.handleLoaded,
      Math.random() * 1000 + 100,
    );
  }

  componentWillUnmount() {
    clearTimeout(this.loadingTimeout);
  }

  get home() {
    const { isLoading, currentPage, totalPages } = this.state;

    if (isLoading) {
      return <PersonesLoading />;
    }

    return (
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
          currentPage={currentPage}
          totalPages={totalPages}
          onChangePage={this.handleChangePage}
        />
      </Fragment>
    );
  }

  handleLoaded = () => this.setState({ isLoading: false });

  handleChangePage = currentPage => this.setState({ currentPage });

  render() {
    return (
      <App
        isSearchButton
        isMenuButton
      >
        {this.home}
      </App>
    );
  }
}
