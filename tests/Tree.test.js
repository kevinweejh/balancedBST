import { Tree } from '../src/Tree.js';
import { Node } from '../src/Node.js';

describe('Tree class tests', () => {
    // buildTree()
    test('creates a balanced BST', () => {
        const tree = new Tree([1, 3, 2, 2]);
        
        expect(tree.root.key).toBe(2);
        expect(tree.root.left.key).toBe(1);
        expect(tree.root.right.key).toBe(3);
        
        expect(tree.root.left.left).toBeNull();
        expect(tree.root.left.right).toBeNull();
        expect(tree.root.right.left).toBeNull();
        expect(tree.root.right.right).toBeNull();
    });

    test('handles empty array', () => {
        const tree = new Tree([]);

        expect(tree.root).toBeNull();
    })

    // insert()
    test('handles insertion of 1 non-repeated number', () => {
        const tree = new Tree([1, 3, 2, 2]);
        tree.insert(4);

        expect(tree.root.right.right.key).toBe(4);
    })

    test('handles insertion of 2 non-repeated numbers', () => {
        const tree = new Tree([1, 3, 2, 2]);
        tree.insert(4);
        tree.insert(0);

        expect(tree.root.right.right.key).toBe(4);
        expect(tree.root.left.left.key).toBe(0);
    })

    test('handles insertion of repeated number', () => {
        const tree = new Tree([1, 3, 2, 2]);
        tree.insert(3);

        expect(tree.root.right.right).toBeNull();
    })

    test('handles insertion into empty BST', () => {
        const tree = new Tree();
        tree.insert(3);

        expect(tree.root).toEqual(new Node(3, null, null));
    })
})