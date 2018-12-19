import React from 'react';
import Gist from 'react-gist';

const MergeSort = () => (
  <div>
    <p>
      Works by decomposing array into smaller arrays, then building new array
    </p>
    <p>
      Accepts array return sorted array using selection sort. Time complexity O
      n squared.
    </p>
    <Gist id="2e8adae799e9274972b7ff874998b0ab" />
  </div>
);

export default MergeSort;
