/**
 * Entry point of the App
 */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { paths, eventTypes } from './constants';
import { App, Events, NotablePerson } from './containers';
import './shared/styles/index.css';

const RouteEvents = ({ type, ...rest }) =>
  <Route
    {...rest}
    render={() => <App screen={Events} screenProps={{ type }} />}
  />;

render(
  <Router>
    <Switch>
      <RouteEvents path={paths.EVENTS_APPEARANCES} type={eventTypes.APPEREANCE} />
      <RouteEvents path={paths.EVENTS_DONATIONS} type={eventTypes.DONATION} />
      <RouteEvents path={paths.EVENTS_QUOTES} type={eventTypes.QUOTE} />
      <Route render={() => <App screen={NotablePerson} />} />
    </Switch>
  </Router>,
  document.getElementById('hv-root'),
);
