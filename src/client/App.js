import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from './Components/Main';
import NavBar from './Components/NavBar';
import Modal from './Components/Modal';
import styles from './styles/main.scss';

class App extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.setScrollY);
  }

  state = {
    scrollY: 0,
    contactModalOpen: false,
  };

  setScrollY = () => {
    this.setState(() => ({
      scrollY: window.scrollY,
    }));
  }
  /* eslint-disable-next-line */
  toggleContactModal = (contactModalOpen = !this.state.contactModalOpen) => {
    this.setState({ contactModalOpen });
  }

  render() {
    const { contactModalOpen, scrollY } = this.state;
    return (
      <div className={contactModalOpen ? styles.modalOpen : null}>
        <Modal toggleContactModal={this.toggleContactModal} open={contactModalOpen} />
        <NavBar toggleContactModal={() => this.toggleContactModal(!contactModalOpen)} scrolled={scrollY >= 64} />
        <Route exact path='/' component={Main} />
      </div>
    );
  }
}

export default App;
