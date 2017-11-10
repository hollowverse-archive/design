/**
 * EventGroup Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { paths, eventTypes, uiStrings } from '../../constants';
import { EventAppearance, EventDonation, EventQuote } from '../../components';
import './styles.css';

const getEventProps = (type) => {
  switch (type) {
    case eventTypes.APPEARANCE:
      return {
        path: paths.EVENTS_APPEARANCES,
        title: uiStrings.APPEARANCES,
        component: EventAppearance,
      };

    case eventTypes.DONATION:
      return {
        path: paths.EVENTS_DONATIONS,
        title: uiStrings.DONTAIONS,
        component: EventDonation,
      };

    case eventTypes.QUOTE:
      return {
        path: paths.EVENTS_QUOTES,
        title: uiStrings.QUOTES,
        component: EventQuote,
      };

    default:
      return undefined;
  }
};

const EventGroup = ({ personName, type, events }) => {
  const eventProps = getEventProps(type);

  return (
    <div className="event-group">
      <Link
        to={eventProps.path}
        className="event-group-title"
      >
        {personName &&
          <span className="event-group-person-name">
            {personName}
          </span>}
        {eventProps.title}
      </Link>
      {events.map(event =>
        <eventProps.component
          key={event.id}
          {...event}
        />)}
    </div>
  );
};

EventGroup.propTypes = {
  type: PropTypes.oneOf([
    eventTypes.APPEARANCE,
    eventTypes.DONATION,
    eventTypes.QUOTE,
  ]).isRequired,
  events: PropTypes.array.isRequired,
  personName: PropTypes.string,
};

EventGroup.defaultProps = {
  personName: undefined,
};

export default EventGroup;
