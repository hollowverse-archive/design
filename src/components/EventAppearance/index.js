/**
 * EventAppearance Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const EventAppearance = props => (
  <div className="event-appearance">
    <div className="event-appearance-content">
      {props.name}
      <div className="event-appearance-caption">
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

EventAppearance.propTypes = {
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sourceName: PropTypes.string,
  sourceUrl: PropTypes.string,
};

EventAppearance.defaultProps = {
  sourceName: '',
  sourceUrl: '',
};

export default EventAppearance;

