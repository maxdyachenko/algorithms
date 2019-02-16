import React from 'react';
import Gist from 'react-gist';

const Queue = () => (
  <div>
    <p>
      <b>Queue - </b> a data collection with principle FIFO.
    </p>
    <p>Where queue are used: background tasks, uploading resources</p>
    <p>
      JS doesnt has native Queue implementation. Simple implementation is array
      with native methods pop, push
    </p>
    <p>Time complexity: pushing and popping - O(1), searching, access - O(n)</p>
    <Gist id="4da5926916a055852813061ca96a7cb2" />
  </div>
);

export default Queue;
