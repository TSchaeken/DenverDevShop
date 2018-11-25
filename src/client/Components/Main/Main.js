import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import TagLine from '../TagLine';
import CaseStudies from '../CaseStudies';
import FollowUp from '../FollowUp';
import Footer from '../Footer';

import styles from './Main.scss';

class HomePage extends Component {
  head = () => (
    <Helmet>
      <meta charSet='utf-8' />
      <title>Denver Dev Shop</title>
      <meta property='og:title' content='Custom Software Development' />
      <meta property='og:description' content='Custom Software Development' />
      <meta property='og:image' content='' />
      <meta property='og:type' content='article' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link rel='canonical' href='http://www.denverdevshop.com' />
      <link href='https://fonts.googleapis.com/css?family=Montserrat:700' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:600' rel='stylesheet' />
    </Helmet>
  );

  render() {
    const { setRef, scrollToRef, scrollY } = this.props;
    console.log('scrollY here: ', scrollY);
    return (
      <div className={styles.root}>
        {this.head()}
        <div className={styles.contentWrapper}>
          <TagLine scrollY={scrollY} scrollToRef={scrollToRef} />
          <CaseStudies />
          <FollowUp />
        </div>
        <Footer setRef={setRef} />
      </div>
    );
  }
}

HomePage.propTypes = {
  setRef: PropTypes.func.isRequired,
  scrollToRef: PropTypes.func.isRequired,
};

export default HomePage;
