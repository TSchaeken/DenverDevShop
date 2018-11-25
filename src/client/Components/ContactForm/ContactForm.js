import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ContactForm.scss';

const SuccessText = ({ toggleForm }) => (
  <div className={styles.successText}>
    <h4>
      Nice, we've got your info now!
    </h4>
    <h4>
      Noah's gonna put some content here eventually I'm sure!
    </h4>
    {/* eslint-disable-next-line */}
    <h4 onClick={toggleForm} className={styles.toggleFormLink}>
      Show me the form again
    </h4>
  </div>
);

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

  toggleForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm,
    }));
  }


  render() {
    const { showForm } = this.state;
    return showForm ? (
      <div className={styles.contactForm}>
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
    ) : <SuccessText toggleForm={this.toggleForm} />;
  }

  /* eslint-disable react/sort-comp */
  // static propTypes = {
  //   handleChange: PropTypes.func.isRequired,
  //   sendEmail: PropTypes.func.isRequired,
  // };
}

SuccessText.propTypes = {
  toggleForm: PropTypes.func.isRequired,
};

export default ContactForm;
