import React from 'react';
import Gist from 'react-gist';

const RadixSort = () => (
  <div>
    <p>
      Radix sort implementation. Works only on array of integers. Time
      Commplexity O(nk). n - number of words, k - number of digits. Space
      complexity: O(n+k);
    </p>
    <img src="https://i.ytimg.com/vi/GUHGMtNo6RQ/maxresdefault.jpg" />
    <Gist id="4ab45d6bbd11e3f48151d92f63bea789" />
  </div>
);

export default RadixSort;
