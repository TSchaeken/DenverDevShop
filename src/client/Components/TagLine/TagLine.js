import React from 'react';
import PropTypes from 'prop-types';

import styles from './TagLine.scss';

const TagLine = ({ scrollToRef }) => (
  <div className={styles.root}>
    <div className={styles.headline}>
      Startup team for hire
    </div>
    <div className={styles.followUp}>
      Lowest cost guaranteed.
    </div>
    <br/>
    <div className={styles.quote}>
      <p>"A great experience working with highly motivated engineers." - Rob</p>
    </div>
    <div className={styles.buttonsWrapper}>
      <button onClick={scrollToRef} type='button'>Meet the team!</button>
    </div>
  </div>
);

TagLine.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default TagLine;
