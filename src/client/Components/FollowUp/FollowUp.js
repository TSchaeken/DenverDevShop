import React from 'react';

import styles from './FollowUp.scss';

const FollowUp = () => (
  <div className={styles.root}>
    <div className={styles.headline}>
      We're a Denver based team of dudebros who are coming to build good shit and steal yo girl.
    </div>
    <div className={styles.followUpText}>
      But for real though, we know you've got a great idea. Let's help you get it out there.
    </div>
    <div className={styles.buttonsWrapper}>
      <button type='button'>Meet the boys</button>
      <button type='button'>Holler at us</button>
    </div>
  </div>
);

export default FollowUp;
