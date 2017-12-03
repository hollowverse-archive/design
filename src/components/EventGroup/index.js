/**
 * EventGroup Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { mapEventTypeToProps } from '../../shared/utils';
import { uiStrings } from '../../constants';
import { Event } from '../../components';
import './styles.css';

const EventGroupTitle = props => (
  props.limit ?
    <Link
      to={props.path}
      className="event-group-title"
    >
      <span className="event-group-person">
        {props.personName}
      </span>
      {props.eventName}
    </Link>
    :
    <div className="event-group-title">
      <Link
        to="/"
        className="event-group-person"
      >
        {props.personName}
      </Link>
      {props.eventName}
    </div>
);


const EventGroup = (props) => {
  const eventProps = mapEventTypeToProps(props.type);

  return (
    <div className="event-group">
      <div className={classNames('event-group-inner', { card: props.limit })}>
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
            personPhotoUrl={props.person.photoUrl}
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
