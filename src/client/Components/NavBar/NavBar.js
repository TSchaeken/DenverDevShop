import React from 'react';
import PropTypes from 'prop-types';
// import { HashLink as Link } from 'react-router-hash-link';
import styles from './NavBar.scss';

const NavBar = ({ scrolled, toggleContactModal }) => (
  <div className={scrolled ? [styles.root, styles.scrolled].join(' ') : styles.root}>
    <div className={styles.logo}>
      <div className={styles.logoText}>Denver Devshop</div>
      <div className={styles.animatedLogo}>
        {/* Denver Devshop */}
        <div className={styles.square} />
        <div className={styles.leftBracket} />
        <div className={styles.rightBracket} />
      </div>
    </div>
    <div className={styles.buttonsWrapper}>
      <button onClick={() => console.log('clicked')} type='button' className={styles.navButton}>
        Our Work
      </button>
      <button onClick={() => console.log('clicked')} type='button' className={styles.navButton}>
        What We Do
      </button>
      <button onClick={() => console.log('clicked')} type='button' className={styles.navButton}>
        Who We Are
      </button>
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
