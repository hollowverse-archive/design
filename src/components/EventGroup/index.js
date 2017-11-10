/**
 * EventGroup Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import { eventTypes, uiStrings } from '../../constants';
import { EventAppearance, EventDonation, EventQuote } from '../../components';
import './styles.css';

const EventGroup = ({ type, events }) => {
  let title;
  let EventComponent;

  if (type === eventTypes.APPEREANCE) {
    title = uiStrings.APPEARANCES;
    EventComponent = EventAppearance;
  } else if (type === eventTypes.DONATION) {
    title = uiStrings.DONTAIONS;
    EventComponent = EventDonation;
  } else if (type === eventTypes.QUOTE) {
    title = uiStrings.QUOTES;
    EventComponent = EventQuote;
  } else {
    return undefined;
  }

  return (
    <div className="event-group">
      <div className="event-group-title">
        {title}
      </div>
      {events.map(event =>
        <EventComponent
          key={event.id}
          {...event}
        />)}
    </div>
  );
};

EventGroup.propTypes = {
  type: PropTypes.oneOf([
    eventTypes.APPEREANCE,
    eventTypes.DONATION,
    eventTypes.QUOTE,
  ]).isRequired,
  events: PropTypes.array.isRequired,
};

export default EventGroup;
