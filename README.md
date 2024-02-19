## Balanced BST Implementation in JavaScript

### Purpose
This repository contains an implementation of a balanced binary search tree (BST) in JavaScript. The balanced BST ensures efficient data retrieval, insertion, and deletion by maintaining a balanced tree structure. This implementation covers fundamental operations like insertion, deletion, search, and tree traversal methods, along with functionality to check tree balance and rebalance the tree when necessary.

### Key Features
- Efficient data operations due to the balanced nature of the BST.
- Dynamic tree rebalancing to maintain optimal performance.
- Support for fundamental tree operations like insert, delete, find, and various tree traversals.
- Utility methods for tree height and depth calculations.
- Tree balancing check and rebalancing method.

### Methods
- `insert(value)`: Inserts a new value into the BST.
- `delete(value)`: Deletes a value from the BST.
- `find(value)`: Finds and returns a node with the specified value.
- `levelOrder()`: Performs a level-order traversal of the tree.
- `preOrder()`, `inOrder()`, `postOrder()`: Perform pre-order, in-order, and post-order traversals, respectively.
- `height()`: Returns the height of the tree.
- `depth(node)`: Returns the depth of the specified node.
- `isBalanced()`: Checks if the tree is balanced.
- `rebalance()`: Rebalances the tree.

### Usage
To use the Tree class, import it into your JavaScript file and create instances of the tree. You can then use the provided methods to manipulate the tree.

```javascript
import { Tree } from './Tree.js';

const myTree = new Tree([1, 2, 3, 4, 5]);

myTree.insert(6);
myTree.delete(2);

const isBalanced = myTree.isBalanced(); // Check if the tree is balanced
const treeHeight = myTree.height(); // Get the height of the tree

// Perform tree traversals
const inOrderTraversal = myTree.inOrder();
const preOrderTraversal = myTree.preOrder();
const postOrderTraversal = myTree.postOrder();
```

## Testing
### Test-Driven Development (TDD)

This project serves as my personal practice ground for adopting Test-Driven Development (TDD) principles. As part of developing good programming habits, Jest test cases were written prior to the implementation of the code, ensuring robustness and reliability of functionalities. To run these tests:

1.  Ensure you have Jest installed: `npm install jest --save-dev`
2.  Run the tests using the npm test script: `npm test`

These tests validate the core functionalities of the BST implementation, covering a wide range of use cases and scenarios.

### End-to-End Testing

Additionally, as part of practicing comprehensive testing strategies, an end-to-end (E2E) test script (`driver.js`) is included. This script tests the tree's behavior in a more integrated manner, simulating real-world usage:

1.  To run the E2E test, navigate to the `/src` directory.
2.  Execute the script using Node.js: `node driver.js`

_Note:_ The `SIZE` constant in `driver.js` is adjustable, allowing you to test the tree with different sizes and see how it behaves under various conditions. This flexibility helps in understanding the scalability and performance of the tree.

## Contribution and Support

### Contributing

While this project is primarily a personal learning exercise, I welcome anyone interested in using it for their learning or experimenting. Feel free to fork the repository, replicate it as you will, and share your findings. 

If you have suggestions for improvements, feel free to submit a pull request.

### Support

For support or to report issues, contact me at [hello@codebykevin.dev](mailto:hello@codebykevin.dev). 
