/**
 * Quote Component
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as strings from '../../constants/UIStrings';
import './styles.css';

const Quote = props => (
  <div className={classNames('quote', { self: props.self })}>
    <div className="quote-content">
      <div className="quote-date">
        {props.date}
      </div>
      <div className="quote-caption">
        {props.self && props.author ?
          `${props.author} ${strings.SAID}:` : `${strings.SOMEONE} ${strings.SAID}:` }
      </div>
      <div className="quote-text">
        {props.text}
      </div>
      <div className="quote-source">
        {`${strings.SOURCE}: ${props.source}`}
      </div>
    </div>
    {props.reply &&
      <div className="quote-reply">
        {props.reply}
        <div className="quote-reply-author">
          {props.replyAuthor}
        </div>
        <img
          className="quote-reply-avatar"
          alt={props.name}
          src={`assets/${props.replyAvatar}`}
        />
      </div>
    }
  </div>
);

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  self: PropTypes.bool,
  author: PropTypes.string,
  source: PropTypes.string,
  reply: PropTypes.string,
  replyAuthor: PropTypes.string,
};

Quote.defaultProps = {
  self: false,
  author: '',
  source: '',
  reply: '',
  replyAuthor: '',
  replyAvatar: '',
};

export default Quote;

