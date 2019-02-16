import React from 'react';
import Gist from 'react-gist';

const Trees = () => (
  <div>
    <p>
      <b>Binary Search Tree - </b> every node has at most 2 children. Every node
      to the left is less that parent node, every right is always greater.
    </p>
    <p>Time complexity: Insertion, searching - O (log n)</p>
    <Gist id="4bf85e72c730dfd695a861b1835ff31f" />
  </div>
);

export default Trees;
