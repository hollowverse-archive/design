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
        key={2}
        type={eventTypes.DONATION}
        events={data.DONATIONS.slice(0, 5)}
      />,
      <EventGroup
        key={3}
        type={eventTypes.QUOTE}
        events={data.QUOTES}
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
