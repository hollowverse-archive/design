/**
 * EventQuote Component
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { uiStrings } from '../../constants';
import './styles.css';

const EventQuote = props => (
  <div className={classNames('event', { self: props.self })}>
    <div className="event-content">
      <div className="event-date">
        {props.postedAt}
      </div>
      <div className="event-caption">
        {props.self && props.author ?
          `${props.author} ${uiStrings.SAID}:` : `${uiStrings.SOMEONE} ${uiStrings.SAID}:` }
      </div>
      <div className="event-text">
        {props.quote}
      </div>
      {props.sourceName &&
        <div className="event-source">
          {`${uiStrings.SOURCE}:`} <a href={props.sourceUrl}>{props.sourceName}</a>
        </div>
      }
    </div>
    {props.userComment &&
      <div className="event-user-comment">
        {props.userComment}
        <div className="event-user-name">
          {props.userDisplayName}
        </div>
        <img
          className="event-user-avatar"
          alt={props.userDisplayName}
          src={props.userAvatar}
        />
      </div>
    }
  </div>
);

EventQuote.propTypes = {
  postedAt: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  self: PropTypes.bool,
  author: PropTypes.string,
  sourceName: PropTypes.string,
  sourceUrl: PropTypes.string,
  userComment: PropTypes.string,
  userDisplayName: PropTypes.string,
  userAvatar: PropTypes.string,
};

EventQuote.defaultProps = {
  self: false,
  author: '',
  sourceName: '',
  sourceUrl: '',
  userComment: '',
  userDisplayName: '',
  userAvatar: '',
};

export default EventQuote;

