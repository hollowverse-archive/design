/**
 * NavBar Component
 */
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';
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
    anim: false,
  };

  componentDidMount() {
    this.update();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.searchValue !== nextProps.search) {
      this.update(nextProps.search);
    }

    if ((nextProps.logo && !this.props.logo) ||
        (nextProps.search && !this.props.search)) {
      this.setState({ anim: true });
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
    const { back, logo } = this.props;
    const { anim, searchValue } = this.state;

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
          {logo &&
            <Link
              to={paths.HOME}
              className={classNames('navbar-logo', { anim })}
            />
          }
          {!logo &&
            <input
              type="text"
              className={classNames('navbar-search', { anim, 'with-buttons': back })}
              value={searchValue}
              placeholder="Search..."
              onFocus={this.handleSearchFocus}
              onChange={this.handleSearchChange}
              onKeyDown={this.handleSearchKeyDown}
              maxLength={50}
            />
          }
        </div>
      </div>
    );
  }
}
