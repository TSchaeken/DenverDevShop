import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.scss';
import bitcoinAccepted from '../../assets/bitcoin_accepted.png';
import coCompany from '../../assets/CO_Company.png';

class Modal extends Component {
  state = {
    address: '',
    focus: '',
    name: '',
    message: '',
  };

  handleChange = (name, value) => {
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  sendEmail = () => {
    const response = fetch('./sendEmail', {
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'POST',
      body: JSON.stringify(this.state),
    });
    Promise.resolve(response).then(result => {
      if (result.ok) {
        console.log('email successfully sent!');
      } else {
        console.log('email failed to send');
      }
    });
  }

  render() {
    const { open, toggleContactModal } = this.props;
    return (
      <div className={open ? [styles.root, styles.open].join(' ') : styles.root}>
        <div
          onClick={() => toggleContactModal(!open)}
          className={styles.backdrop}
          role='presentation'
        >
          <div
            role='presentation'
            onClick={e => e.stopPropagation()}
            className={styles.dialogBox}
          >
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <h2>Your email will be shared with a golden retriever.</h2>
                <h3>And then forgotten. She adheres to GDPR.</h3>
              </div>
              <div className={styles.modalBody}>
                <div className={styles.modalForm}>
                  <div className={styles.inlineInputWrapper}>
                    <input
                      placeholder='Your Name'
                      onChange={e => this.handleChange('name', e.target.value)}
                      type='text' />
                    <input
                      placeholder='Your Email'
                      onChange={e => this.handleChange('address', e.target.value)}
                      type='text' />
                  </div>
                  <input
                    placeholder='Your Project Focus'
                    onChange={e => this.handleChange('focus', e.target.value)}
                    type='text' />
                  <textarea
                    onChange={e => this.handleChange('message', e.target.value)}
                    placeholder='Your Message' />
                  <button onClick={this.sendEmail} className={styles.submitButton} type='submit'>
                    Submit
                  </button>
                </div>
                <div className={styles.modalContactInfo}>
                  <br />
                  <img src={coCompany} alt='coCompany'/>
                  <br />
                  <br />
                  <h5>Location</h5>
                  <p>Denver, CO USA</p>
                  <p>Phone 720.588.3355</p>
                  <br />
                  <img src={bitcoinAccepted} alt='bitcoinAccepted' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleContactModal: PropTypes.func.isRequired,
};

export default Modal;
