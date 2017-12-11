/**
 * Entry point of the App
 */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { paths, eventTypes } from './constants';
import { Events, Home, NotablePerson, Search } from './containers';
import './shared/styles/index.css';

/* eslint-disable */
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
/* eslint-enable */

render(
  <Router>
    <Switch>
      <Route
        path={paths.SEARCH}
        component={Search}
      />
      <Route
        path={paths.NOTABLE_PERSON}
        component={NotablePerson}
      />
      <Route
        path={paths.EVENTS_APPEARANCES}
        render={props => <Events {...props} type={eventTypes.APPEARANCE} />}
      />
      <Route
        path={paths.EVENTS_DONATIONS}
        render={props => <Events {...props} type={eventTypes.DONATION} />}
      />
      <Route
        path={paths.EVENTS_QUOTES}
        render={props => <Events {...props} type={eventTypes.QUOTE} />}
      />
      <Route
        path={paths.HOME}
        component={Home}
      />
      <Redirect to={paths.HOME} />
    </Switch>
  </Router>,
  document.getElementById('hv-root'),
);
