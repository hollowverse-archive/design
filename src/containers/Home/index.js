/**
 * Home container
 */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { data, paths } from '../../constants';
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
    currentPage: 1,
    totalPages: 39,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.loadingTimeout = setTimeout(this.handleLoaded, (Math.random() * 1000) + 100);
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
        <div className="home-footer">
          <Link to={paths.CONTACT}>Contact</Link>
          <Link to={paths.ABOUT}>About</Link>
          <Link to={paths.PRIVACY_POLICY}>Privacy</Link>
          <Link to={paths.TERMS_OF_SERVICE}>Terms</Link>

          <a href={paths.TWITTER} target="_blank">Twitter</a>
          <a href={paths.FACEBOOK} target="_blank">Facebook</a>
          <a href={paths.EMAIL_NEWSLETTER} target="_blank">Email newsletter</a>
          <a href={paths.RSS_FEED} target="_blank">RSS Feed</a>
        </div>
      </Fragment>
    );
  }

  handleLoaded = () => this.setState({ isLoading: false });

  handleChangePage = currentPage => this.setState({ currentPage });

  render() {
    return (
      <App isSearchButton>
        {this.home}
      </App>
    );
  }
}

