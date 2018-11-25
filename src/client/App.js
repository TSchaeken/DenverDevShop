import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from './Components/Main';
import NavBar from './Components/NavBar';
// import Modal from './Components/Modal';
import styles from './styles/main.scss';

class App extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.setScrollY);
  }

  state = {
    scrollY: 0,
  };

  setScrollY = () => {
    this.setState(() => ({
      scrollY: window.scrollY,
    }));
  }

  render() {
    const { contactModalOpen, scrollY } = this.state;
    return (
      <div className={contactModalOpen ? styles.modalOpen : null}>
        <NavBar scrolled={scrollY >= 64} />
        <Route
          exact
          path='/'
          component={Main}
        />
      </div>
    );
  }
}

export default App;
