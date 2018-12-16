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
    </ul>
  </nav>
);

export default NavBar;
