/**
 * NotablePerson Container
 */
import React from 'react';
import PersonDetails from '../../components/PersonDetails';
import Event from '../../components/Event';
import FbComments from '../../components/FbComments';

const NOTABLE_PERSON_DATA = {
  name: 'Arnold Schwarznegger',
  photoUrl: 'assets/arnold.jpg',
  labels: ['Filmmaker', 'Actor', 'Producer'],
  about: [
    'Hanks has run the gamut of Chrisian denominations from Mormonism to Catholicism but seems to have settled on Greek Orthodox.',
    'Hanks is a hardcode Democrat and liberal, throwing his weight behind gay marriage, alternatieve energy, environmentalism, and Obama.',
  ],
};

const EVENT_1 = {
  userComment: 'There are many kinds of narratives and organizing principles. Science is driven by evidence gathered in experiments, and by the falsification of extant theories and their replacement with newer, asymptotically truer, ones.',
  userDisplayName: 'San Holo',
  userAvatar: 'assets/san-holo.jpg',
  author: 'Tom Hanks',
  postedAt: 'Jul 19, 2017',
  quote: 'Phisolophy is considered a science but it is difficult to stay, whne one has to compare with an ordinary science, for example biology, or chemistry. This is a question that turns into a burning problem among the scientists and linguists all over the world.',
  sourceName: 'link.com',
  sourceUrl: 'http://link.com',
};

const EVENT_2 = {
  userComment: 'There are many kinds of narratives and organizing principles. Science is driven by evidence gathered in experiments, and by the falsification of extant theories and their replacement with newer, asymptotically truer, ones.',
  userDisplayName: 'John Fantastico',
  userAvatar: 'assets/john-fantastico.jpg',
  postedAt: 'Jul 12, 2017',
  quote: 'Let us dream of tomorrow here we can truly love the soul, and know love as the ultimate truth at the heart of all creation.',
  sourceName: 'link.com',
  sourceUrl: 'http://link.com',
};

const EVENT_3 = {
  userComment: 'There are many kinds of narratives and organizing principles. Science is driven by evidence gathered in experiments, and by the falsification of extant theories and their replacement with newer, asymptotically truer, ones.',
  userDisplayName: 'Mr. Incredible',
  userAvatar: 'assets/mr-incredible.jpg',
  postedAt: 'Jul 10, 2017',
  quote: 'Let us dream of tomorrow here we can truly love the soul, and know love as the ultimate truth at the heart of all creation.',
  sourceName: 'link.com',
  sourceUrl: 'http://link.com',
};

const NotablePerson = () => (
  <div className="app-view">
    <PersonDetails {...NOTABLE_PERSON_DATA} />
    <Event self {...EVENT_1} />
    <Event {...EVENT_2} />
    <Event {...EVENT_3} />
    <FbComments />
  </div>
);

export default NotablePerson;
