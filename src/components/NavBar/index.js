/**
 * NavBar Component
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';

export default class NavBar extends Component {
  static propTypes = {
    back: PropTypes.string,
    onSearch: PropTypes.func,
    search: PropTypes.string,
    logo: PropTypes.bool,
  };

  static defaultProps = {
    back: undefined,
    onSearch: () => {},
    search: undefined,
    logo: false,
  };

  state = {
    searchValue: '',
  };

  componentDidMount() {
    this.update();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.searchValue !== nextProps.search) {
      this.update(nextProps.search);
    }
  }

  update(searchValue = this.props.search) {
    this.setState({ searchValue });
  }

  handleSearchFocus = e => e.target.select();

  handleSearchChange = e => this.setState({ searchValue: e.target.value });

  handleSearchKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.target.blur();
      this.props.onSearch(this.state.searchValue);
    }
  };

  render() {
    const { back, search, logo } = this.props;

    return (
      <div className="navbar">
        <div className="navbar-inner">
          {back &&
            <Link
              type="button"
              className="navbar-btn back"
              to={back}
            />
          }
          {search &&
            <input
              type="text"
              className="navbar-search"
              value={this.state.searchValue}
              onFocus={this.handleSearchFocus}
              onChange={this.handleSearchChange}
              onKeyDown={this.handleSearchKeyDown}
              maxLength={50}
            />
          }
          {logo &&
            <div className="navbar-logo" />
          }
        </div>
      </div>
    );
  }
}
