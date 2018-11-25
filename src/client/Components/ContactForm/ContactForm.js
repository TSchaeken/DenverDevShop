import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import styles from './ContactForm.scss';

class ContactForm extends Component {
  state = {
    address: '',
    focus: '',
    name: '',
    message: '',
    showForm: true,
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
        this.setState({ showForm: false });
      } else {
        console.log('email failed to send');
      }
    });
  }

  render() {
    return (
      <div className={styles.contactForm}>
        {/* <div className={styles.inlineInputWrapper}>
          <input
            placeholder='Your Name'
            onChange={e => this.handleChange('name', e.target.value)}
            type='text' />
          <input
            placeholder='Your Email'
            onChange={e => this.handleChange('address', e.target.value)}
            type='text' />
        </div> */}
        <input
          placeholder='Your Name'
          onChange={e => this.handleChange('name', e.target.value)}
          type='text' />
        <input
          placeholder='Your Email'
          onChange={e => this.handleChange('address', e.target.value)}
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
