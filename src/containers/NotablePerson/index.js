/**
 * NotablePerson Container
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { data, eventTypes } from '../../constants';
import {
  PersonLoading,
  PersonesOther,
  PersonDetails,
  EventGroup,
  FbComments,
  Footnotes,
  Section,
  Separator,
} from '../../components';

/* eslint-disable react/no-danger */
const OldContent = () => (
  <Fragment>
    <h2>Religion</h2>
    <p>{data.NOTABLE_PERSON.religion}</p>
    <Separator />
    <h2>Political Views</h2>
    <p>{data.NOTABLE_PERSON.political}</p>
    <Separator />
    <div dangerouslySetInnerHTML={{ __html: data.ARTICLE }} />
    <Separator />
    <Footnotes data={data.ARTICLE_FOOTNOTES} />
  </Fragment>
);

const NotablePerson = ({ isLoading }) => (
  isLoading ?
    <PersonLoading />
    :
    <Fragment>
      <PersonDetails
        {...data.NOTABLE_PERSON}
      />
      <EventGroup
        limit
        person={data.NOTABLE_PERSON}
        type={eventTypes.QUOTE}
        events={data.QUOTES.slice(0, 3)}
      />
      <Section>
        <OldContent />
      </Section>
      <PersonesOther />
      <FbComments />
    </Fragment>
);

NotablePerson.propTypes = {
  isLoading: PropTypes.bool,
};

NotablePerson.defaultProps = {
  isLoading: false,
};

export default NotablePerson;
