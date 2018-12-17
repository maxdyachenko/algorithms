import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavBar from './common/NavBar';
import Home from './home';
import FrequencyCounter from './frequencyCounter';
import MultiplePointers from './multiplePointers';
import SlidingWindow from './slidingWindow';
import DivideAndConquer from './divideAndConquer';
import Recursion from './recursion';
import SearchAlgorithms from './searchAlgorithms';

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
            <Route path="/frequency-counter" component={FrequencyCounter} />
            <Route path="/multiple-pointers" component={MultiplePointers} />
            <Route path="/sliding-window" component={SlidingWindow} />
            <Route path="/divide-and-conquer" component={DivideAndConquer} />
            <Route path="/recursion" component={Recursion} />
            <Route path="/search-algortithms" component={SearchAlgorithms} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
