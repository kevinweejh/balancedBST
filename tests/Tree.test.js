import { Tree } from '../src/Tree.js';

describe('Tree class tests', () => {
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
})