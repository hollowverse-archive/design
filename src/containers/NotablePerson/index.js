/**
 * NotablePerson Container
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { data, eventTypes } from '../../constants';
import {
  PersonLoading,
  PersonesOther,
  PersonDetails,
  EventGroup,
  FbComments,
  SectionCard,
} from '../../components';

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
      <SectionCard
        title="Religion"
        content={data.NOTABLE_PERSON.religion}
      />
      <SectionCard
        title="Political Views"
        content={data.NOTABLE_PERSON.religion}
      />
      <PersonesOther />
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
