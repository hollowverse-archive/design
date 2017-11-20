/**
 * NotablePerson Container
 */
import React from 'react';
import PropTypes from 'prop-types';
import { data, eventTypes } from '../../constants';
import { PersonLoading, PersonDetails, EventGroup, FbComments } from '../../components';

const NotablePerson = ({ isLoading }) => (
  isLoading ?
    <PersonLoading />
    :
    [
      <PersonDetails
        key={1}
        {...data.NOTABLE_PERSON}
      />,
      <EventGroup
        key={3}
        limit
        person={data.NOTABLE_PERSON}
        type={eventTypes.QUOTE}
        events={data.QUOTES.slice(0, 3)}
      />,
      <EventGroup
        key={4}
        limit
        person={data.NOTABLE_PERSON}
        type={eventTypes.DONATION}
        events={data.DONATIONS.slice(0, 5)}
      />,
      <EventGroup
        key={5}
        limit
        person={data.NOTABLE_PERSON}
        type={eventTypes.APPEARANCE}
        events={data.APPEARANCES.slice(0, 5)}
      />,
      <FbComments key={6} />,
    ]
);

NotablePerson.propTypes = {
  isLoading: PropTypes.bool,
};

NotablePerson.defaultProps = {
  isLoading: false,
};

export default NotablePerson;
