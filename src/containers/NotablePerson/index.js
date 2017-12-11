/**
 * NotablePerson Container
 */
import React, { Component, Fragment } from 'react';
import { data, eventTypes } from '../../constants';
import { App } from '../../containers';
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
    <div dangerouslySetInnerHTML={{ __html: data.ARTICLE }} />
    <Separator />
    <Footnotes data={data.ARTICLE_FOOTNOTES} />
  </Fragment>
);

export default class NotablePerson extends Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.loadingTimeout = setTimeout(this.handleLoaded, (Math.random() * 1000) + 100);
  }

  componentWillUnmount() {
    clearTimeout(this.loadingTimeout);
  }

  handleLoaded = () => this.setState({ isLoading: false });

  render() {
    return (
      <App>
        {this.state.isLoading ?
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
        }
      </App>
    );
  }
}

