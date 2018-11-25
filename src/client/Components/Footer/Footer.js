import React from 'react';

import ContactForm from '../ContactForm';
import styles from './Footer.scss';

/* eslint-disable */
// const Footer = ({ toggleModal }) => (
//   <div className={styles.root}>
//     <div className={styles.footerText}>
//       Ready to launch?
//     </div>
//     <div onClick={toggleModal} className={styles.footerLink}>
//       Let's Chat!
//     </div>
//     <div className={styles.copyrightWrapper}>
//         <div className={styles.copyright}>
//             <p>&copy; Denver Devshop 2018 — Denver, CO</p>
//         </div>
//         <div className={styles.phoneNumber}>
//             <p>720.588.3355</p>
//         </div>
//     </div>
//   </div>
// );

const Footer = () => (
  <div className={styles.root}>
    <div className={styles.branding}>
      Here's some footer branding content
    </div>
    <div className={styles.contactFormWrapper}>
      <h2>Contact Us Today</h2>
      <p>You'll hear from us by tomorrow</p>
      <ContactForm />
    </div>
  </div>
)

export default Footer;
