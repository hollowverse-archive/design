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
          type={eventTypes.APPEARANCE}
          events={data.APPEARANCES}
        />);

    case eventTypes.DONATION:
      return (
        <EventGroup
          type={eventTypes.DONATION}
          events={data.DONATIONS}
        />);

    case eventTypes.QUOTE:
      return (
        <EventGroup
          type={eventTypes.QUOTE}
          events={data.QUOTES}
        />);

    default:
      return undefined;
  }
};

export default Events;
