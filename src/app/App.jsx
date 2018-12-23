import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavBar from './common/NavBar';
import Home from './home';
import FrequencyCounter from './frequencyCounter';
import MultiplePointers from './multiplePointers';
import SlidingWindow from './slidingWindow';
import DivideAndConquer from './divideAndConquer';
import Recursion from './recursion';
import SearchAlgorithms, {LinearSearch, BinarySearch} from './searchAlgorithms';
import SortAlgorithms, {
  BubbleSort,
  InsertionSort,
  SelectionSort,
  RadixSort,
  QuickSort,
  MergeSort,
} from './sortAlgorithms';
import SinglyLinkedlist from './singlyLinkedList';
import DoublyLinkedlist from './doublyLinkedList';

import styles from './index.module.scss';

const App = () => (
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
        <Route exact path="/search-algorithms" component={SearchAlgorithms} />
        <Route
          path="/search-algorithms/linear-search"
          component={LinearSearch}
        />
        <Route
          path="/search-algorithms/binary-search"
          component={BinarySearch}
        />
        <Route exact path="/sort-algorithms" component={SortAlgorithms} />
        <Route path="/sort-algorithms/bubble-sort" component={BubbleSort} />
        <Route
          path="/sort-algorithms/insertion-sort"
          component={InsertionSort}
        />
        <Route
          path="/sort-algorithms/selection-sort"
          component={SelectionSort}
        />
        <Route path="/sort-algorithms/merge-sort" component={MergeSort} />
        <Route path="/sort-algorithms/quick-sort" component={QuickSort} />
        <Route path="/sort-algorithms/radix-sort" component={RadixSort} />
        <Route
          path="/data-structures/singly-linked-list"
          component={SinglyLinkedlist}
        />
        <Route
          path="/data-structures/doubly-linked-list"
          component={DoublyLinkedlist}
        />
      </div>
    </div>
  </Router>
);

export default App;
