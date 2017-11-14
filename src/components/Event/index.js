/**
 * Event Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import { uiStrings } from '../../constants';
import { removeHttp, uniqueId } from '../../shared/utils';
import { Label } from '../../components';
import './styles.css';

const EventQuote = ({ quote, photoUrl }) => (
  <div className="event-quote">
    <div
      className="event-quote-avatar"
      style={{ backgroundImage: `url(${photoUrl})` }}
    />
    {quote}
  </div>
);

const EventMetaLink = ({ url, label = '' }) =>
  <a targe="_blank" href={url}>{`${label}${removeHttp(url)}`}</a>;

const EnvetLabels = ({ labels }) =>
  <div className="event-labels">
    {labels.map(label =>
      <Label
        small
        key={uniqueId('label-')}
        text={label}
      />)
    }
  </div>;

const Event = props => (
  <div className="event">
    {props.eventName &&
      <div className="event-name">
        {props.eventName}
      </div>
    }
    {props.quote &&
      <EventQuote
        quote={props.quote}
        photoUrl={props.personPhotoUrl}
      />
    }
    <div className="event-meta">
      {props.labels.length > 0 &&
        <EnvetLabels labels={props.labels} />
      }
      <span>
        {props.happenedOn}
      </span>
      {props.eventUrl &&
        <EventMetaLink url={props.eventUrl} />}
      {props.sourceUrl &&
        <EventMetaLink
          label={`${uiStrings.SOURCE}: `}
          url={props.sourceUrl}
        />
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
  labels: PropTypes.array,
};

Event.defaultProps = {
  eventName: undefined,
  eventUrl: undefined,
  sourceUrl: undefined,
  quote: undefined,
  personPhotoUrl: undefined,
  labels: [],
};

export default Event;

