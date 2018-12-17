import React from 'react';
import Gist from 'react-gist';

const MultiplePointers = () => (
  <div>
    <p>
      Write a function called <b>sumZero</b> which accepts a <b>sorted</b> array
      of integers. The function should find the first pair where the sum is 0.
      Return an array that includes both values or undefined if a pair does not
      exist.
    </p>
    <Gist id="81682949c2fa1ed7848f7eebe3902baa" />
    <p>
      Implement a function called <b>countUniqueValues</b>, which accepts sorted
      array and return count of unique values
    </p>
    <Gist id="70bc419eb94ed131916d25ea3613a5ae" />
  </div>
);

export default MultiplePointers;
