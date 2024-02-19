import { Tree } from './Tree.js';

const SIZE = 10;

const arrGenerator = (size) => {
    return new Array(size).fill().map(() => Math.floor(100 * Math.random()));
}

const bstArr = arrGenerator(SIZE);
const bst = new Tree(bstArr);

const initialBalance = bst.isBalanced();
console.log(`Initial balance: ${initialBalance}`);

console.log('Level order:', bst.levelOrder());
console.log('Pre order:', bst.preOrder());
console.log('In order:', bst.inOrder());
console.log('Post order:', bst.postOrder());

bst.insert(101);
bst.insert(105);
bst.insert(107);

const postInsertionBalance = bst.isBalanced();
console.log(`Post-insertion balance: ${postInsertionBalance}`);

bst.rebalance();

const postRebalancingBalance = bst.isBalanced();
console.log(`Post-rebalancing balance: ${postRebalancingBalance}`);

console.log('Level order:', bst.levelOrder());
console.log('Pre order:', bst.preOrder());
console.log('In order:', bst.inOrder());
console.log('Post order:', bst.postOrder());