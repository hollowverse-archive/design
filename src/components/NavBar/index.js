/**
 * NavBar Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { uiStrings } from '../../constants';
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
      {props.title}
    </div>
  </div>
);

NavBar.propTypes = {
  title: PropTypes.string,
  back: PropTypes.string,
};

NavBar.defaultProps = {
  title: uiStrings.HOLLOWVERSE,
  back: undefined,
};

export default NavBar;

