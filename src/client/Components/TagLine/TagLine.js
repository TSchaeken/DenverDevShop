import React from 'react';

import styles from './TagLine.scss';

const TagLine = ({ toggleModal }) => (
  <div className={styles.root}>
    <div className={styles.headline}>
      Startup team for hire
    </div>
    <div className={styles.followUp}>
      "A great experience working with highly motivated engineers."
    </div>
    <div className={styles.followUp}>
      We specialize in design and robust application development.
    </div>
    <div className={styles.buttonsWrapper}>
      <button onClick={toggleModal} type='button'>Meet the team!</button>
    </div>
  </div>
);

export default TagLine;
