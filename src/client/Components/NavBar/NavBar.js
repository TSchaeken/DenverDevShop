import React from 'react';
import PropTypes from 'prop-types';
// import { HashLink as Link } from 'react-router-hash-link';
import styles from './NavBar.scss';

const NavBar = ({ scrolled }) => (
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
      <div>
        Our Work
      </div>
      <div>
        What We Do
      </div>
      <div>
        Who We Are
      </div>
      <div>
        Contact Us
      </div>
    </div>
  </div>
);

NavBar.propTypes = {
  scrolled: PropTypes.bool.isRequired,
};

export default NavBar;
