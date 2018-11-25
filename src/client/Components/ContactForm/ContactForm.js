import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import styles from './ContactForm.scss';

class ContactForm extends Component { 

  handleChange = () => {
    console.log('do something');
  }

  sendEmail = () => {
    console.log('do something');
  }

  render() {
    return (
      <div className={styles.contactForm}>
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
    );
  }

  /* eslint-disable react/sort-comp */
  // static propTypes = {
  //   handleChange: PropTypes.func.isRequired,
  //   sendEmail: PropTypes.func.isRequired,
  // };
}

export default ContactForm;
