import React from 'react';

import styles from './CaseStudies.scss';
import denver1 from '../../assets/denver-767050_640.jpg';
import denver2 from '../../assets/denver-1043509_640.jpg';
import denver3 from '../../assets/denver-1762084_640.jpg';
import denver4 from '../../assets/larimer-2617495_640.jpg';

const CaseStudies = () => (
  <div className={styles.root}>

    <div className={styles.testImageWrapper1}>
      <img src={denver1} alt='denver1' className={styles.anchorImage} />
    </div>
    <div className={styles.testImageWrapper2}>
      <div style={{ backgroundImage: `url(${denver2})` }} alt='denver2' className={styles.testImage} />
    </div>

    <div className={styles.testImageWrapper3}>
      <div style={{ backgroundImage: `url(${denver3})` }} alt='denver3' className={styles.testImage} />
    </div>
    <div className={styles.testImageWrapper4}>
      <div style={{ backgroundImage: `url(${denver4})` }} alt='denver4' className={styles.testImage} />
    </div>

  </div>
);

export default CaseStudies;
