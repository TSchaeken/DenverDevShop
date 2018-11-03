import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.scss';

class Modal extends Component {
  state = {
    email: '',
    body: '',
  };

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
                <h2>Contact Us. We Promise Not To Steal Your Girl.</h2>
                <h3>That is, as long as you tell us how we can help you.</h3>
              </div>
              <div className={styles.modalBody}>
                <div className={styles.modalForm}>
                  <div className={styles.inlineInputWrapper}>
                    <input placeholder='Your Name' type='text' />
                    <input placeholder='Your Email' type='text' />
                  </div>
                  <input placeholder='Your Project Focus' type='text' />
                  <textarea placeholder='Your Message' />
                  <button className={styles.submitButton} type='submit'>
                    Submit
                  </button>
                </div>
                <div className={styles.modalContactInfo}>
                  <h5>Location</h5>
                  <p>Denver, CO USA</p>
                  <p>123 Your Mom's house</p>
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
