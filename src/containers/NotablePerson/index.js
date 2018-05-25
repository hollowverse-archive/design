/**
 * NotablePerson Container
 */
import React, { Component, Fragment } from 'react';
import { data } from '../../constants';
import { Consumer } from '../../state';
import {
  App,
  PersonLoading,
  PersonesOther,
  PersonDetails,
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
    <Separator />
    <p className="small">
      This article was written by{' '}
      <a href={data.ARTICLE_META.authorUrl}>{data.ARTICLE_META.author}</a> and
      last updated on {data.ARTICLE_META.created}.
    </p>
  </Fragment>
);

export default class NotablePerson extends Component {
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
        {({ state: { showNotablePersonImage, withLoading } }) => (
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
