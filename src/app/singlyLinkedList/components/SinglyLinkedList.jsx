import React from 'react';
import Gist from 'react-gist';

const SinglyLinkedList = () => (
  <div>
    <p>
      <b>Singly linked list - </b>a data structure that contains of{' '}
      <b>head, tail and length</b> property.
    </p>
    <p>
      Linked lists contains of nodes and each <b>node</b> has a <b>value</b> and
      a <b>pointer</b> to another node or null
      <b>
        If you are working with really long pieces of data and you need to do
        insertions and deletions - linked lists are great.
      </b>
    </p>
    <img src="https://he-s3.s3.amazonaws.com/media/uploads/1b76d10.png" />
    <p>Pros</p>
    <ul>
      <li>Overflow can never occur unless the memory is actually full.</li>
      <li>
        Insertions and deletions are easier than for contiguous (array) lists.
      </li>
      <li>
        With large records, moving pointers is easier and faster than moving the
        items themselves.
      </li>
    </ul>
    <p>Cons</p>
    <ul>
      <li>The pointers require extra space.</li>
      <li>
        Linked lists do not allow random access. (You can not access directly
        item[10])
      </li>
      <li>Time must be spent traversing and changing the pointers.</li>
    </ul>
    <Gist id="b1dd67912ac5b9e9aea9e36185f48612" />
  </div>
);

export default SinglyLinkedList;
