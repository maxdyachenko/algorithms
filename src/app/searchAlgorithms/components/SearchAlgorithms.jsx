import React from 'react';
import {Link} from 'react-router-dom';

const SearchAlgorithms = () => (
  <div>
    <a href="https://www.toptal.com/developers/sorting-algorithms">
      https://www.toptal.com/developers/sorting-algorithms
    </a>
    <ul>
      <li>
        <Link to="search-algorithms/linear-search">Linear Search</Link>
      </li>
      <li>
        <Link to="search-algorithms/binary-search">Binary Search</Link>
      </li>
    </ul>
  </div>
);

export default SearchAlgorithms;
