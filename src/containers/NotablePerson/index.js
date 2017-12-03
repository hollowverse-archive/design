/**
 * NotablePerson Container
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { data, eventTypes } from '../../constants';
import { PersonLoading, PersonDetails, EventGroup, FbComments } from '../../components';

const NotablePerson = ({ isLoading }) => (
  isLoading ?
    <PersonLoading />
    :
    <Fragment>
      <PersonDetails
        {...data.NOTABLE_PERSON}
      />
      <EventGroup
        limit
        person={data.NOTABLE_PERSON}
        type={eventTypes.QUOTE}
        events={data.QUOTES.slice(0, 3)}
      />
      <EventGroup
        limit
        person={data.NOTABLE_PERSON}
        type={eventTypes.DONATION}
        events={data.DONATIONS.slice(0, 5)}
      />,
      <EventGroup
        limit
        person={data.NOTABLE_PERSON}
        type={eventTypes.APPEARANCE}
        events={data.APPEARANCES.slice(0, 5)}
      />,
      <FbComments />
    </Fragment>
);

NotablePerson.propTypes = {
  isLoading: PropTypes.bool,
};

NotablePerson.defaultProps = {
  isLoading: false,
};

export default NotablePerson;
