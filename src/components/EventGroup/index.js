/**
 * EventGroup Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { mapEventTypeToProps } from '../../shared/utils';
import { uiStrings } from '../../constants';
import { Event } from '../../components';
import './styles.css';

const EventGroupTitle = ({ limit, path, eventName }) => (
  limit ?
    <Link
      to={path}
      className="event-group-title"
    >
      {eventName}
    </Link>
    :
    <div className="event-group-title">
      {eventName}
    </div>
);


const EventGroup = (props) => {
  const eventProps = mapEventTypeToProps(props.type);

  return (
    <div className="event-group">
      <div className="event-group-inner">
        <EventGroupTitle
          limit={props.limit}
          path={eventProps.path}
          personName={props.person.name}
          eventName={eventProps.name}
        />
        {props.events.map(event =>
          <Event
            key={event.id}
            className={eventProps.className}
            person={props.person}
            {...event}
          />)}
        {props.limit &&
          <Link
            to={eventProps.path}
            className="event-group-more"
          >
            {uiStrings.SEE_MORE}
          </Link>
        }
      </div>
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

export default EventGroup;
