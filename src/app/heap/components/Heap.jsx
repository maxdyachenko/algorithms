import React from 'react';
import Gist from 'react-gist';

const Heap = () => (
  <div>
    <p>
      <b>Heap - </b> very similar to binary search tree, but with some different
      rules. In MaxBinaryHeap, parent nodes are always larger than child and in
      MinBinaryHeap parent nodes are always smaller.
    </p>
    <p>
      For any index of array n... The left child is storen 2n + 1, the right
      child is stored 2n + 2
      <img src="https://i.ytimg.com/vi/W81Qzuz4qH0/maxresdefault.jpg" />
    </p>

    <p>
      Time complexity Binary Heap: Insertion: O(log N), Removal: O(log N),
      Searching: O(n)
    </p>
    <p>Max bianry Heap implementation</p>
    <Gist id="9fe120bd758d25084ae536699f0f9420" />
    <p>Priority Queue Heap implementation</p>
    <Gist id="0b359aadaa460c54df7ec03e4272393e" />
  </div>
);

export default Heap;
