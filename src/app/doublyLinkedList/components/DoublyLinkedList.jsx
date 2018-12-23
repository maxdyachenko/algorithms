import React from 'react';
import Gist from 'react-gist';

const DoublyLinkedList = () => (
  <div>
    <p>
      <b>Doubly linked list - </b> the same as singly linked list, but has
      pointer to previous element.
    </p>

    <p>
      Time complexity: Insertion: O(1), Removal: O(1), Searching: O(n), Access:
      O(n)
    </p>
    <Gist id="acc3d0b1994e34c38dbd986337f62c7a" />
  </div>
);

export default DoublyLinkedList;
