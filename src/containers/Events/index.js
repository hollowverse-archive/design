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

  let events = data.QUOTES;
  if (props.type === eventTypes.APPEARANCE) {
    events = data.APPEARANCES;
  } else if (props.type === eventTypes.DONATION) {
    events = data.DONATIONS;
  }

  return (
    <EventGroup
      person={data.NOTABLE_PERSON}
      type={props.type}
      events={events}
    />);
};

export default Events;
