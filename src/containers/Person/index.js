/**
 * Person Container
 */
import React from 'react';
import PersonDetails from '../../components/PersonDetails';
import Quote from '../../components/Quote';
import FbComments from '../../components/FbComments';

const PERSON_DATA = {
  name: 'Arnold Schwarznegger',
  avatar: 'arnold.jpg',
  tags: ['Filmmaker', 'Actor', 'Producer'],
  about: [
    'Hanks has run the gamut of Chrisian denominations from Mormonism to Catholicism but seems to have settled on Greek Orthodox.',
    'Hanks is a hardcode Democrat and liberal, throwing his weight behind gay marriage, alternatieve energy, environmentalism, and Obama.',
  ],
};

const QUOTE_1 = {
  author: 'Tom Hanks',
  text: 'Phisolophy is considered a science but it is difficult to stay, whne one has to compare with an ordinary science, for example biology, or chemistry. This is a question that turns into a burning problem among the scientists and linguists all over the world.',
  date: 'Jul 19, 2017',
  source: 'link.com',
  reply: 'There are many kinds of narratives and organizing principles. Science is driven by evidence gathered in experiments, and by the falsification of extant theories and their replacement with newer, asymptotically truer, ones.',
  replyAuthor: 'San Holo',
  replyAvatar: 'san-holo.jpg',
};

const QUOTE_2 = {
  text: 'Let us dream of tomorrow here we can truly love the soul, and know love as the ultimate truth at the heart of all creation.',
  date: 'Jul 12, 2017',
  source: 'link.com',
  reply: 'There are many kinds of narratives and organizing principles. Science is driven by evidence gathered in experiments, and by the falsification of extant theories and their replacement with newer, asymptotically truer, ones.',
  replyAuthor: 'John Fantastico',
  replyAvatar: 'john-fantastico.jpg',
};

const QUOTE_3 = {
  text: 'Let us dream of tomorrow here we can truly love the soul, and know love as the ultimate truth at the heart of all creation.',
  date: 'Jul 10, 2017',
  source: 'link.com',
  reply: 'There are many kinds of narratives and organizing principles. Science is driven by evidence gathered in experiments, and by the falsification of extant theories and their replacement with newer, asymptotically truer, ones.',
  replyAuthor: 'Mr. Incredible',
  replyAvatar: 'mr-incredible.jpg',
};

const Person = () => (
  <div>
    <PersonDetails {...PERSON_DATA} />
    <Quote self {...QUOTE_1} />
    <Quote {...QUOTE_2} />
    <Quote {...QUOTE_3} />
    <FbComments />
  </div>
);

export default Person;
