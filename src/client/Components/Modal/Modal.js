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
          onClick={toggleContactModal}
          className={styles.backdrop}
          onKeyDown={this.onKeyDown}
          role='dialog'
        >
          {open ? 'open' : 'closed'}
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
