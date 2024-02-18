import { Node } from '../src/Node.js';

describe('Node class tests', () => {
    test('should create a new Node with key, left, and right', () => {
        const node = new Node(1, null, null);
        expect(node.key).toBe(1);
        expect(node.left).toBeNull();
        expect(node.right).toBeNull();
    })
})