/**
 * Events Container
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { eventTypes, data, paths } from '../../constants';
import { App } from '../../containers';
import { Loader, EventGroup } from '../../components';

export default class Events extends Component {
  static propTypes = {
    type: PropTypes.oneOf([
      eventTypes.APPEARANCE,
      eventTypes.DONATION,
      eventTypes.QUOTE,
    ]).isRequired,
  }

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
    const { location, type } = this.props;

    let events = data.QUOTES;
    if (type === eventTypes.APPEARANCE) {
      events = data.APPEARANCES;
    } else if (type === eventTypes.DONATION) {
      events = data.DONATIONS;
    }

    return (
      <App
        back={paths.NOTABLE_PERSON}
        pathname={location.pathname}
      >
        {this.state.isLoading ?
          <Loader />
        :
          <EventGroup
            person={data.NOTABLE_PERSON}
            type={type}
            events={events}
          />
        }
      </App>);
  }
}

