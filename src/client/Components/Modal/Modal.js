import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.scss';

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
                <h2>Contact Us. We Promise Not To Steal Your Girl.</h2>
                <h3>That is, as long as you tell us how we can help you.</h3>
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
