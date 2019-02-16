import React from 'react';
import {Link} from 'react-router-dom';

import styles from './index.module.scss';

const NavBar = () => (
  <nav className={styles.mainNav}>
    <div>
      <p>Algrotirhms</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/frequency-counter">Frequency Counter</Link>
        </li>
        <li>
          <Link to="/multiple-pointers">Multiple Pointers</Link>
        </li>
        <li>
          <Link to="/sliding-window">Sliding Window</Link>
        </li>
        <li>
          <Link to="/divide-and-conquer">Divide And Conquer</Link>
        </li>
        <li>
          <Link to="/recursion">Recursion</Link>
        </li>
        <li>
          <Link to="/search-algorithms">Search Algorithms</Link>
        </li>
        <li>
          <Link to="/sort-algorithms">Sort Algorithms</Link>
        </li>
      </ul>
    </div>
    <div>
      <p>Data sctructures</p>
      <ul>
        <li>
          <Link to="/data-structures/singly-linked-list">
            Singly Linked List
          </Link>
        </li>
        <li>
          <Link to="/data-structures/doubly-linked-list">
            Doubly Linked List
          </Link>
        </li>
        <li>
          <Link to="/data-structures/stacks">Stacks</Link>
        </li>
        <li>
          <Link to="/data-structures/queue">Queue</Link>
        </li>
        <li>
          <Link to="/data-structures/trees">Trees</Link>
        </li>
        <li>
          <Link to="/data-structures/heap">Heap</Link>
        </li>
        <li>
          <Link to="/data-structures/hash-table">Hash Table</Link>
        </li>
      </ul>
    </div>
    <div>
      <p>Useful links (interview questions)</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
