/**
 * EventDonate Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const EventDonate = props => (
  <div className="event-donate">
    <div className="event-donate-content">
      {props.targetName}
      <div className="event-donate-caption">
        {props.date}
        {props.sourceName &&
        <a
          targe="_blank"
          href={props.sourceUrl}
        >
          {props.sourceName}
        </a>
      }
      </div>
    </div>
  </div>
);

EventDonate.propTypes = {
  date: PropTypes.string.isRequired,
  targetName: PropTypes.string.isRequired,
  sourceName: PropTypes.string,
  sourceUrl: PropTypes.string,
};

EventDonate.defaultProps = {
  sourceName: '',
  sourceUrl: '',
};

export default EventDonate;

