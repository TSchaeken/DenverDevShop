import React, { Component } from 'react';

import ContactForm from '../ContactForm';
import styles from './Footer.scss';
import bitcoinAccepted from '../../assets/bitcoin_accepted.png';
import coCompany from '../../assets/CO_Company.png';


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

const Branding = () => (
  <div className={styles.modalContactInfo}>
    <br />
    <img src={coCompany} alt='coCompany' />
    <br />
    <br />
    <h5>Location</h5>
    <p>Denver, CO USA</p>
    <p>Phone 720.588.3355</p>
    <br />
    <img src={bitcoinAccepted} alt='bitcoinAccepted' />
  </div>
);

class Footer extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }
  componentDidMount() {
    this.props.setRef(this.ref)
  }
  render() {
    return (
      <div className={styles.root} ref={this.ref}>
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
  }
}

export default Footer;
