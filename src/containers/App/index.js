/**
 * App Container
 */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavBar, ErrorMessage } from '../../components';
import './styles.css';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    back: PropTypes.string,
  }

  static defaultProps = {
    back: undefined,
  }

  state = {
    isLogo: true,
    errorMessage: undefined,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentDidCatch() {
    this.setState({
      errorMessage: 'Something is wrong on our end. Try again later.',
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
    const { back, children } = this.props;
    const { isLogo, errorMessage } = this.state;

    return (
      <Fragment>
        <NavBar
          logo={isLogo}
          search={isLogo ? '' : 'Arnold Schwarznegger'}
          back={back}
        />
        <div className="app-view">
          {!errorMessage ?
            children
            :
            <ErrorMessage
              message={errorMessage}
              action={() => window.location.reload()}
              actionLabel="Reload the Page"
            />
          }
        </div>
      </Fragment>
    );
  }
}
