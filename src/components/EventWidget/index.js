/**
 * EventWidget Component
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { uiStrings, eventTypes, paths } from '../../constants';
import { EventGroup } from '../../components';
import './styles.css';

const typeToPaths = (type) => {
  switch (type) {
    case eventTypes.APPEARANCE:
      return paths.EVENTS_APPEARANCES;

    case eventTypes.DONATION:
      return paths.EVENTS_DONATIONS;

    case eventTypes.QUOTE:
      return paths.EVENTS_QUOTES;

    default:
      return undefined;
  }
};

const EventWidget = props => (
  <div className="event-widget">
    <EventGroup {...props} />
    <Link
      to={typeToPaths(props.type)}
      className="event-widget-link-more"
    >
      {uiStrings.SEE_MORE}
    </Link>
  </div>
);

export default EventWidget;
