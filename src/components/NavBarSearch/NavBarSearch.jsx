/**
 * NavBarSearch Component
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { paths } from '../../constants/paths';
import { data } from '../../constants/tempData';
import { Loader } from '../../components/Loader/Loader';
import { Link } from '../../components/Link/Link';
import './styles.css';

export class NavBarSearch extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    searchValue: PropTypes.string,
    anim: PropTypes.bool,
    margins: PropTypes.bool,
    autoFocus: PropTypes.bool,
  };

  static defaultProps = {
    searchValue: undefined,
    anim: false,
    margins: false,
    autoFocus: false,
  };

  state = {
    isLoading: false,
    open: false,
  };

  /* eslint-disable camelcase */
  UNSAFE_componentWillReceiveProps(newProps) {
    /* eslint-enable camelcase */
    const { searchValue } = this.props;

    if (!searchValue && newProps.searchValue) {
      this.setState({ isLoading: true, open: false });
      this.loadingTimeout = setTimeout(
        this.handleLoaded,
        Math.random() * 1000 + 500,
      );
    } else if (searchValue && !newProps.searchValue) {
      this.setState({ open: false });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.loadingTimeout);
  }

  get searchBody() {
    const { searchValue } = this.props;

    return (
      <div className="navbar-search-body">
        {data.PERSONES.map(({ id, name, photoUrl }) => (
          <Link key={id} to={paths.NOTABLE_PERSON}>
            <div
              className="navbar-search-body-avatar"
              style={{ backgroundImage: `url(${photoUrl})` }}
            />
            {name}
          </Link>
        ))}
        <Link to={paths.SEARCH_NO_RESULTS} className="all-results">
          {`See results for ${searchValue}`}
        </Link>
      </div>
    );
  }

  handleLoaded = () => this.setState({ isLoading: false, open: true });

  handleFocus = e => e.target.select();

  render() {
    const {
      anim,
      margins,
      searchValue,
      autoFocus,
      onChange,
      onKeyDown,
      onBlur,
    } = this.props;

    const { isLoading, open } = this.state;

    return (
      <div
        className={classNames('navbar-search', {
          anim,
          margins,
          loading: isLoading,
        })}
      >
        <input
          type="text"
          className="navbar-search-input"
          value={searchValue}
          autoFocus={autoFocus}
          placeholder="Search..."
          onFocus={this.handleFocus}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          maxLength={50}
        />
        {isLoading && <Loader small />}
        {open > 0 && this.searchBody}
      </div>
    );
  }
}
