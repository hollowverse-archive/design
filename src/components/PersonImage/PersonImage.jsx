/**
 * PersonImage Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

export const PersonImage = ({ big, url }) => (
  <div
    className={classNames('person-image', { big, empty: !url })}
    style={url ? { backgroundImage: `url(${url})` } : undefined}
  />
);

PersonImage.propTypes = {
  url: PropTypes.string,
  big: PropTypes.bool,
};

PersonImage.defaultProps = {
  url: undefined,
  big: false,
};
