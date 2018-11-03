import React from 'react';

import styles from './Footer.scss';

const Footer = () => (
  <div className={styles.root}>
    <div className={styles.footerText}>
      Ready to launch?
    </div>
    <div className={styles.footerLink}>
      Let's Chat!
    </div>
    <div>
      <div>&copy; Denver Devshop 2018 — Denver, CO</div>
      <div>720.588.3355</div>
    </div>
  </div>
);

export default Footer;
