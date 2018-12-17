import React from 'react';
import {Link} from 'react-router-dom';

import styles from './index.module.scss';

const NavBar = () => (
  <nav className={styles.mainNav}>
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
    </ul>
  </nav>
);

export default NavBar;
