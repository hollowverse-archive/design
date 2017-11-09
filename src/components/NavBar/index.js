/**
 * NavBar Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import * as strings from '../../constants/uiStrings';
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
  title: strings.HOLLOWVERSE,
};

export default NavBar;

