/**
 * Utils
 */
import * as eventTypes from '../../constants/eventTypes';
import * as paths from '../../constants/paths';

export const removeHttp = url => url.replace(/(^\w+:|^)\/\//, '');

export const mapEventTypeToProps = type => {
  switch (type) {
    case eventTypes.APPEARANCE:
      return {
        path: paths.EVENTS_APPEARANCES,
        name: 'Appearances',
        className: 'event-type-appearance',
      };

    case eventTypes.DONATION:
      return {
        path: paths.EVENTS_DONATIONS,
        name: 'Donations',
        className: 'event-type-donation',
      };

    case eventTypes.QUOTE:
      return {
        path: paths.EVENTS_QUOTES,
        name: 'Quotes',
        className: 'event-type-quote',
      };

    default:
      return undefined;
  }
};

let lastUniqueId = 0;

export const uniqueId = (prefix = 'id') => {
  lastUniqueId += 1;
  return `${prefix}${lastUniqueId}`;
};
