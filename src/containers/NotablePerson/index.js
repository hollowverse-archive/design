/**
 * NotablePerson Container
 */
import React from 'react';
import PropTypes from 'prop-types';
import { data, eventTypes } from '../../constants';
import { PersonLoading, PersonDetails, EventWidget, FbComments } from '../../components';

const NotablePerson = ({ isLoading }) => (
  isLoading ?
    <PersonLoading />
    :
    [
      <PersonDetails
        key={1}
        {...data.NOTABLE_PERSON}
      />,
      <EventWidget
        key={3}
        type={eventTypes.QUOTE}
        events={data.QUOTES.slice(0, 3)}
      />,
      <EventWidget
        key={4}
        type={eventTypes.DONATION}
        events={data.DONATIONS.slice(0, 5)}
      />,
      <EventWidget
        key={5}
        type={eventTypes.APPEARANCE}
        events={data.APPEARANCES.slice(0, 5)}
      />,
      <FbComments key={5} />,
    ]
);

NotablePerson.propTypes = {
  isLoading: PropTypes.bool,
};

NotablePerson.defaultProps = {
  isLoading: false,
};

export default NotablePerson;
