/**
 * NavBar Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = props => (
  <div className="navbar">
    <div className="navbar-inner">
      {props.back &&
        <Link
          type="button"
          className="navbar-btn back"
          to={props.back}
        />
      }
      <div className="navbar-logo" />
    </div>
  </div>
);

NavBar.propTypes = {
  back: PropTypes.string,
};

NavBar.defaultProps = {
  back: undefined,
};

export default NavBar;

