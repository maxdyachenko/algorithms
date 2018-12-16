import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavBar from './common/NavBar';
import Home from './home';

import styles from './index.module.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.page}>
          <NavBar />
          <div className={styles.container}>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
