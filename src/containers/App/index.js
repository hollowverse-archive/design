/**
 * App Container
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavBar, ErrorMessage } from '../../components';
import './styles.css';

const ERRORS = [
  'Notable Person is not found.',
  'Internet connection is lost or slow.',
  'Something is wrong on our end. Try again later.',
];

const getRandomError = () =>
  Math.random() >= 0.8 && ERRORS[Math.floor(Math.random() * ERRORS.length)];

export default class App extends Component {
  static propTypes = {
    screen: PropTypes.func,
    screenProps: PropTypes.object,
  }

  static defaultProps = {
    screen: <div />,
    screenProps: undefined,
  }

  state = {
    isLoading: true,
    errorMessage: undefined,
  }

  componentDidMount() {
    // Emulate loading and error
    setTimeout(this.handleLoaded, (Math.random() * 1000) + 100);

    window.scrollTo(0, 0);
  }

  handleLoaded = () => {
    this.setState({
      isLoading: false,
      errorMessage: getRandomError(),
    });
  }

  render() {
    const Screen = this.props.screen;

    return ([
      <NavBar key={1} />,
      <div key={2} className="app-view">
        {!this.state.errorMessage ?
          <Screen
            isLoading={this.state.isLoading}
            {...this.props.screenProps}
          />
          :
          <ErrorMessage
            message={this.state.errorMessage}
            action={() => window.location.reload()}
            actionLabel="Reload the Page"
          />
        }
      </div>,
    ]);
  }
}
