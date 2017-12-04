/**
 * Event Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { uiStrings } from '../../constants';
import { removeHttp, uniqueId } from '../../shared/utils';
import { Label } from '../../components';
import './styles.css';

const EventQuote = ({ quote }) => (
  <div className="event-quote">
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
  <div className={classNames('event', { [props.className]: props.className })}>
    <div className="event-header">
      <div
        className="event-avatar"
        style={{ backgroundImage: `url(${props.person.photoUrl})` }}
      />
      <div className="event-person-name">
        {props.person.name}
      </div>
      <div className="event-meta">
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
    {props.quote &&
      <EventQuote
        quote={props.quote}
      />
    }
    {props.labels.length > 0 &&
      <EnvetLabels labels={props.labels} />
    }
  </div>
);

Event.propTypes = {
  happenedOn: PropTypes.string.isRequired,
  className: PropTypes.string,
  eventUrl: PropTypes.string,
  sourceUrl: PropTypes.string,
  quote: PropTypes.string,
  person: PropTypes.object,
  labels: PropTypes.array,
};

Event.defaultProps = {
  className: undefined,
  eventUrl: undefined,
  sourceUrl: undefined,
  quote: undefined,
  person: {},
  labels: [],
};

export default Event;

