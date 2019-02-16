import React from 'react';
import Gist from 'react-gist';

const Hash = () => (
  <div>
    <p>
      <b>Hash Table - </b> is like an array, but key are not ordered. They are
      fast for all operations. Hash tables store data in a large arrays and work
      by hashing the keys. Separate chaining and linear probing to deal with
      collisions.
    </p>
    <p>Time complexity: insert - O(1), deletion - O(1), access - O(1)</p>
    <Gist id="fe62705ee9ad5db386e79ac7bb5657d7" />
  </div>
);

export default Hash;
