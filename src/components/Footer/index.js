/**
 * Footer Component
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';
import './styles.css';

const Footer = () => (
  <div className="footer">
    <Link to={paths.CONTACT}>Contact</Link>
    <Link to={paths.ABOUT}>About</Link>
    <Link to={paths.PRIVACY_POLICY}>Privacy</Link>
    <Link to={paths.TERMS_OF_SERVICE}>Terms</Link>

    <a href={paths.TWITTER} target="_blank">Twitter</a>
    <a href={paths.FACEBOOK} target="_blank">Facebook</a>
    <a href={paths.EMAIL_NEWSLETTER} target="_blank">Email newsletter</a>
    <a href={paths.RSS_FEED} target="_blank">RSS Feed</a>
  </div>
);

export default Footer;
