import React from 'react';

import styles from './FollowUp.scss';

const FollowUp = () => (
  <div className={styles.root}>
    <div className={styles.headline}>
      We're a Denver based team of innovative, creative and passionate individuals who love to collaborate.
    </div>
    <div className={styles.followUpText}>
      You've got a great idea. We want to help you build it.
    </div>
    <div className={styles.buttonsWrapper}>
      <button type='button'>Holler at us</button>
    </div>
  </div>
);

export default FollowUp;
