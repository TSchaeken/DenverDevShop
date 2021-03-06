import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from './Components/Main';
import NavBar from './Components/NavBar';
import styles from './styles/main.scss';

class App extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.setScrollY);
  }

  state = {
    scrollY: 0,
    ref: null,
  };

  setScrollY = () => {
    this.setState(() => ({
      scrollY: window.scrollY,
    }));
  }

  setRef = ref => {
    this.setState({ ref });
  }

  scrollToRef = () => {
    const { ref } = this.state;
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  }

  render() {
    const { contactModalOpen, scrollY } = this.state;
    return (
      <div className={contactModalOpen ? styles.modalOpen : null}>
        <NavBar scrolled={scrollY >= 64} scrollToRef={this.scrollToRef} />
        <Route
          exact
          path='/'
          render={(props) => (
            <Main scrollY={scrollY} setRef={this.setRef} scrollToRef={this.scrollToRef} />
          )}
        />
      </div>
    );
  }
}

export default App;
