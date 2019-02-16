import React from 'react';
import Gist from 'react-gist';

const Stack = () => (
  <div>
    <p>
      <b>Stack - </b> a data collection with principle LIFO.
    </p>
    <p>
      Where stacks are used: managing function invocation, undo/redo, routing
    </p>
    <p>
      JS doesnt has native stack implementation. Simple implementation is array
      with native methods pop, push
    </p>
    <p>Time complexity: pushing and popping - O(1), searching, access - O(n)</p>
    <Gist id="a3a142153dfdd20eb81296d268ac16f5" />
  </div>
);

export default Stack;
