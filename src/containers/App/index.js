/**
 * App Container
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavBar, ErrorMessage } from '../../components';
import './styles.css';

export default class App extends Component {
  static propTypes = {
    screen: PropTypes.func,
    screenProps: PropTypes.object,
    backPath: PropTypes.string,
  }

  static defaultProps = {
    screen: undefined,
    screenProps: undefined,
    backPath: undefined,
  }

  state = {
    isLoading: true,
    errorMessage: undefined,
  }

  componentDidMount() {
    // Emulate loading
    setTimeout(this.handleLoaded, (Math.random() * 1000) + 100);

    window.scrollTo(0, 0);
  }

  componentDidCatch() {
    this.setState({
      isLoading: false,
      errorMessage: 'Something is wrong on our end. Try again later.',
    });
  }

  handleLoaded = () => {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    const Screen = this.props.screen;

    return ([
      <NavBar
        key={1}
        back={this.props.backPath}
      />,
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
