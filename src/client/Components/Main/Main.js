import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import { HashLink as Link } from 'react-router-hash-link';
// import About from './Info';
// import UnionStation from '../images/unionStation.jpg';
// import Form from './Form';
import TagLine from '../TagLine';
import CaseStudies from '../CaseStudies';
import FollowUp from '../FollowUp';
import Footer from '../Footer';

//Photo by Owen CL on Unsplash

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
    </Helmet>
  );

  render() {
    return (
      <div className={styles.root}>
        {this.head()}
        <TagLine />
        <CaseStudies />
        <FollowUp />
        <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
  // classes: PropTypes.object.isRequired,
};

export default HomePage;
