/**
 * Events Container
 */
import React from 'react';
import { eventTypes, data } from '../../constants';
import { Loader, EventGroup } from '../../components';

const Events = (props) => {
  if (props.isLoading) {
    return <Loader />;
  }

  switch (props.type) {
    case eventTypes.APPEARANCE:
      return (
        <EventGroup
          personName={data.NOTABLE_PERSON.name}
          type={eventTypes.APPEARANCE}
          events={data.APPEARANCES}
        />);

    case eventTypes.DONATION:
      return (
        <EventGroup
          personName={data.NOTABLE_PERSON.name}
          type={eventTypes.DONATION}
          events={data.DONATIONS}
        />);

    case eventTypes.QUOTE:
      return (
        <EventGroup
          personName={data.NOTABLE_PERSON.name}
          type={eventTypes.QUOTE}
          events={data.QUOTES}
        />);

    default:
      return undefined;
  }
};

export default Events;
