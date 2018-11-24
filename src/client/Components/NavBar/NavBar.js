import React from 'react';
import PropTypes from 'prop-types';
// import { HashLink as Link } from 'react-router-hash-link';
import styles from './NavBar.scss';

const NavBar = ({ scrolled, toggleContactModal }) => (
  <div className={scrolled ? [styles.root, styles.scrolled].join(' ') : styles.root}>
    <div className={styles.logo}>
      <div className={styles.logoText}>Denver Devshop</div>
      <div className={styles.animatedLogo}>
        <div className={styles.square} />
        <div className={styles.leftBracket} />
        <div className={styles.rightBracket} />
      </div>
    </div>
    <div className={styles.buttonsWrapper}>
      <button onClick={toggleContactModal} type='button' className={styles.navButton}>
        Contact Us
      </button>
    </div>
  </div>
);

NavBar.propTypes = {
  scrolled: PropTypes.bool.isRequired,
  toggleContactModal: PropTypes.func.isRequired,
};

export default NavBar;
