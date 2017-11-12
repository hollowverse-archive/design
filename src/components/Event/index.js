/**
 * Event Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import { uiStrings } from '../../constants';
import { removeHttp } from '../../shared/utils';
import './styles.css';

const Event = props => (
  <div className="event">
    {props.eventName &&
      <div className="event-name">
        {props.eventName}
      </div>
    }
    {props.quote &&
      <div className="event-quote">
        <div
          className="event-avatar"
          style={{ backgroundImage: `url(${props.personPhotoUrl})` }}
        />
        <div className="event-quote-text">
          {props.quote}
        </div>
      </div>
    }
    <div className="event-meta">
      {props.happenedOn}
      {props.eventUrl &&
        <a
          targe="_blank"
          href={props.eventUrl}
        >
          {props.eventUrl}
        </a>
      }
      {props.sourceUrl &&
        <a
          targe="_blank"
          href={props.sourceUrl}
        >
          {`${uiStrings.SOURCE}: ${removeHttp(props.sourceUrl)}`}
        </a>
      }
    </div>
  </div>
);

Event.propTypes = {
  happenedOn: PropTypes.string.isRequired,
  eventName: PropTypes.string,
  eventUrl: PropTypes.string,
  sourceUrl: PropTypes.string,
  quote: PropTypes.string,
  personPhotoUrl: PropTypes.string,
};

Event.defaultProps = {
  eventName: undefined,
  eventUrl: undefined,
  sourceUrl: undefined,
  quote: undefined,
  personPhotoUrl: undefined,
};

export default Event;

