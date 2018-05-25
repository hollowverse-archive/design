/**
 * Utils
 */
import { eventTypes, paths, uiStrings } from '../../constants';

export const removeHttp = url => url.replace(/(^\w+:|^)\/\//, '');

export const mapEventTypeToProps = type => {
  switch (type) {
    case eventTypes.APPEARANCE:
      return {
        path: paths.EVENTS_APPEARANCES,
        name: uiStrings.APPEARANCES,
        className: 'event-type-appearance',
      };

    case eventTypes.DONATION:
      return {
        path: paths.EVENTS_DONATIONS,
        name: uiStrings.DONTAIONS,
        className: 'event-type-donation',
      };

    case eventTypes.QUOTE:
      return {
        path: paths.EVENTS_QUOTES,
        name: uiStrings.QUOTES,
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
