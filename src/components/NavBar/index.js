/**
 * NavBar Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import { uiStrings } from '../../constants';
import './styles.css';

const NavBar = props => (
  <div className="navbar">
    {props.title}
  </div>
);

NavBar.propTypes = {
  title: PropTypes.string,
};

NavBar.defaultProps = {
  title: uiStrings.HOLLOWVERSE,
};

export default NavBar;

