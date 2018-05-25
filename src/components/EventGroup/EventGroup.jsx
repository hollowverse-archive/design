/**
 * EventGroup Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import { mapEventTypeToProps } from '../../shared/utils/utils';
import { uiStrings } from '../../constants/uiStrings';
import { Event } from '../../components/Event/Event';
import { Link } from '../../components/Link/Link';
import './styles.css';

const EventGroupTitle = ({ limit, path, eventName }) => {
  return limit ? (
    <Link to={path} className="event-group-title">
      {eventName}
    </Link>
  ) : (
    <div className="event-group-title">{eventName}</div>
  );
};

export const EventGroup = props => {
  const eventProps = mapEventTypeToProps(props.type);

  return (
    <div className="event-group">
      <EventGroupTitle
        limit={props.limit}
        path={eventProps.path}
        personName={props.person.name}
        eventName={eventProps.name}
      />
      {props.events.map(event => (
        <Event
          key={event.id}
          className={eventProps.className}
          person={props.person}
          {...event}
        />
      ))}
      {props.limit && (
        <Link to={eventProps.path} className="event-group-more">
          {uiStrings.SEE_MORE}
        </Link>
      )}
    </div>
  );
};

EventGroup.propTypes = {
  type: PropTypes.string.isRequired,
  person: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  limit: PropTypes.bool,
};

EventGroup.defaultProps = {
  limit: false,
};
