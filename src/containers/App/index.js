/**
 * App Container
 */
import React, { Component, Fragment } from 'react';
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
    isLogo: true,
    errorMessage: undefined,
  }

  componentDidMount() {
    // Emulate loading
    setTimeout(this.handleLoaded, (Math.random() * 1000) + 100);

    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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

  handleScroll = () => {
    if (this.state.isLogo && window.scrollY > 200) {
      this.setState({ isLogo: false });
    } else if (!this.state.isLogo && window.scrollY < 200) {
      this.setState({ isLogo: true });
    }
  }

  render() {
    const Screen = this.props.screen;

    return (
      <Fragment>
        <NavBar
          logo={this.state.isLogo}
          search={this.state.isLogo ? '' : 'Arnold Schwarznegger'}
          back={this.props.backPath}
        />
        <div className="app-view">
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
        </div>
      </Fragment>
    );
  }
}
