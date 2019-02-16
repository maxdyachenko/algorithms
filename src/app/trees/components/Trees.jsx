import React from 'react';
import {Link} from 'react-router-dom';
import Gist from 'react-gist';

const Trees = () => (
  <div>
    <p>
      <b>Tree - </b>is a data sctructure consist of nodes that consist of
      parent/child relationship.
    </p>
    <p>Use cases for trees: HTML DOM, Folders in operation file system, JSON</p>
    <ul>
      <li>
        <Link to="/data-structures/trees/bst">Binary search tree</Link>
      </li>
      <li>
        <p to="/data-structures/trees/bfs">Breadth first search</p>
        <img src="https://images.slideplayer.com/24/6977355/slides/slide_8.jpg" />
      </li>
      <li>
        <p to="/data-structures/trees/dfs">Depth first search</p>
        <img src="https://he-s3.s3.amazonaws.com/media/uploads/9fa1119.jpg" />
      </li>
    </ul>
    <p>
      Which one is better? It depends on tree. If tree is wide with a lots of
      node, that DFS is better because it requires less space. If tree is
      "single" like one line, that BFS is better. DFS in order better to use
      when you have BST, then finally you will get "sorted" data.
    </p>
    <Gist id="784c98869dfce35b9afeed66fe335d9a" />
  </div>
);

export default Trees;
