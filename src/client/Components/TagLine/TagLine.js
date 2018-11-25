import React from 'react';
import PropTypes from 'prop-types';

import styles from './TagLine.scss';

const TagLine = ({ scrollToRef, scrollY }) => {
  console.log('scrollY: ', scrollY);
  const style = {
    bottom: `${(scrollY - 64) / 4}px`,
  };
  return (
    <div className={styles.root}>
      <div style={style} className={styles.headline}>
        Startup team for hire
      </div>
      <div style={style} className={styles.followUp}>
        We specialize in design and robust application development.
      </div>
      <div style={style} className={styles.followUp}>
        <p>"A great experience working with highly motivated engineers."</p>
        <p className={styles.attribution}>- Rob</p>
      </div>
      <div style={style} className={styles.buttonsWrapper}>
        <button onClick={scrollToRef} type='button'>Meet the team!</button>
      </div>
    </div>
  );
};

TagLine.propTypes = {
  scrollToRef: PropTypes.func.isRequired,
};

export default TagLine;
