/**
 * NotablePerson Container
 */
import React, { Component, Fragment } from 'react';
import * as data from '../../constants/tempData';
import { Consumer } from '../../state/state';
import { App } from '../../components/App/App';
import { PersonLoading } from '../../components/PersonLoading/PersonLoading';
import { PersonesOther } from '../../components/PersonesOther/PersonesOther';
import { PersonDetails } from '../../components/PersonDetails/PersonDetails';
import { FbComments } from '../../components/FbComments/FbComments';
import { EventGroup } from '../../components/EventGroup/EventGroup';
import { Footnotes } from '../../components/Footnotes/Footnotes';
import { Section } from '../../components/Section/Section';
import { Separator } from '../../components/Separator/Separator';
import * as eventTypes from '../../constants/eventTypes';

const OldContent = () => (
  <Fragment>
    <div dangerouslySetInnerHTML={{ __html: data.ARTICLE }} />
    <Separator />
    <Footnotes data={data.ARTICLE_FOOTNOTES} />
    <Separator />
    <p className="small">
      This article was written by{' '}
      <a href={data.ARTICLE_META.authorUrl}>{data.ARTICLE_META.author}</a> and
      last updated on {data.ARTICLE_META.created}.
    </p>
  </Fragment>
);

export class NotablePerson extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    window.document.title = `${data.NOTABLE_PERSON.name} | Hollowverse`;

    this.loadingTimeout = setTimeout(this.handleLoaded, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.loadingTimeout);
  }

  handleLoaded = () => this.setState({ isLoading: false });

  render() {
    return (
      <Consumer>
        {({ state: { showNotablePersonImage, withLoading, hasQuotes } }) => (
          <App searchValue={data.NOTABLE_PERSON.name} isMenuButton>
            {this.state.isLoading && withLoading ? (
              <PersonLoading />
            ) : (
              <Fragment>
                <PersonDetails
                  {...data.NOTABLE_PERSON}
                  photoUrl={
                    showNotablePersonImage ? data.NOTABLE_PERSON.photoUrl : null
                  }
                />
                {hasQuotes && (
                  <Fragment>
                    <EventGroup
                      limit
                      person={data.NOTABLE_PERSON}
                      type={eventTypes.QUOTE}
                      events={data.QUOTES.slice(0, 3)}
                    />
                  </Fragment>
                )}
                <Section>
                  <OldContent />
                </Section>
                <PersonesOther />
                <FbComments />
              </Fragment>
            )}
          </App>
        )}
      </Consumer>
    );
  }
}
