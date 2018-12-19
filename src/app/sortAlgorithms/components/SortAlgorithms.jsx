import React from 'react';
import {Link} from 'react-router-dom';

const SortAlgorithms = () => (
  <div>
    <a href="https://www.toptal.com/developers/sorting-algorithms">
      https://www.toptal.com/developers/sorting-algorithms
    </a>
    <ul>
      <li>
        <Link to="sort-algorithms/bubble-sort">Bubble Sort</Link>
      </li>
      <li>
        <Link to="sort-algorithms/selection-sort">Selection Sort</Link>
      </li>
      <li>
        <Link to="sort-algorithms/insertion-sort">Insertion Sort</Link>
      </li>
    </ul>

    <p>Advantage sort algorithms. Time complexity O(n log n)</p>
    <ul>
      <li>
        <Link to="sort-algorithms/merge-sort">Merge sort</Link>
      </li>
      <li>
        <Link to="sort-algorithms/quick-sort">Quick sort</Link>
      </li>
      <li>
        <Link to="sort-algorithms/radix-sort">Radix sort</Link>
      </li>
    </ul>
  </div>
);

export default SortAlgorithms;
