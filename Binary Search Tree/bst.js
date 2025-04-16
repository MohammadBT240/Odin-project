// Node class/factory: Each node has a data value and left/right children.
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Tree class: This class holds the binary search tree and its functions.
class Tree {
  constructor(array) {
    // Remove duplicates and sort the array before building the tree.
    const uniqueSortedArray = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree(uniqueSortedArray);
  }

  // buildTree: Recursively build a balanced BST from a sorted (and deduplicated) array.
  buildTree(arr) {
    if (arr.length === 0) return null;
    const mid = Math.floor(arr.length / 2);
    const node = new Node(arr[mid]);
    node.left = this.buildTree(arr.slice(0, mid));
    node.right = this.buildTree(arr.slice(mid + 1));
    return node;
  }

  // insert: Add a value to the BST. Ignore duplicates.
  insert(value) {
    // Check for duplicate before insertion.
    if (this.find(value)) return;

    const insertNode = (node, value) => {
      if (value < node.data) {
        if (node.left === null) {
          node.left = new Node(value);
        } else {
          insertNode(node.left, value);
        }
      } else {
        if (node.right === null) {
          node.right = new Node(value);
        } else {
          insertNode(node.right, value);
        }
      }
    };

    // Start insertion at the root.
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      insertNode(this.root, value);
    }
  }

  // deleteItem: Remove a node with the given value from the BST.
  deleteItem(value) {
    const deleteNode = (node, value) => {
      if (node === null) return null;
      if (value < node.data) {
        node.left = deleteNode(node.left, value);
      } else if (value > node.data) {
        node.right = deleteNode(node.right, value);
      } else {
        // Node found. Handle the three cases:
        // 1. No child or only one child.
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;
        // 2. Two children: get the smallest value from the right subtree.
        let temp = node.right;
        while (temp.left !== null) {
          temp = temp.left;
        }
        node.data = temp.data;
        node.right = deleteNode(node.right, temp.data);
      }
      return node;
    };

    this.root = deleteNode(this.root, value);
  }

  // find: Return the node with the given value.
  find(value, node = this.root) {
    if (node === null) return null;
    if (value === node.data) return node;
    if (value < node.data) return this.find(value, node.left);
    return this.find(value, node.right);
  }

  // levelOrder: Traverse the tree in breadth-first level order and call the callback on each node.
  levelOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("A callback function is required");
    }
    const queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      const current = queue.shift();
      if (current !== null) {
        callback(current);
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
      }
    }
  }

  // inOrder: Depth-first in-order traversal.
  inOrder(callback, node = this.root) {
    if (typeof callback !== "function") {
      throw new Error("A callback function is required");
    }
    if (node !== null) {
      this.inOrder(callback, node.left);
      callback(node);
      this.inOrder(callback, node.right);
    }
  }

  // preOrder: Depth-first pre-order traversal.
  preOrder(callback, node = this.root) {
    if (typeof callback !== "function") {
      throw new Error("A callback function is required");
    }
    if (node !== null) {
      callback(node);
      this.preOrder(callback, node.left);
      this.preOrder(callback, node.right);
    }
  }

  // postOrder: Depth-first post-order traversal.
  postOrder(callback, node = this.root) {
    if (typeof callback !== "function") {
      throw new Error("A callback function is required");
    }
    if (node !== null) {
      this.postOrder(callback, node.left);
      this.postOrder(callback, node.right);
      callback(node);
    }
  }

  // height: Returns the height (number of edges on the longest path to a leaf) for a given value.
  height(value) {
    const node = this.find(value);
    if (node === null) return null;

    const heightRec = (node) => {
      if (node === null) return -1;
      const leftHeight = heightRec(node.left);
      const rightHeight = heightRec(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
    };

    return heightRec(node);
  }

  // depth: Returns the depth (number of edges from the node to the root) for a given value.
  depth(value) {
    const depthRec = (node, value, d) => {
      if (node === null) return -1;
      if (node.data === value) return d;
      if (value < node.data) return depthRec(node.left, value, d + 1);
      return depthRec(node.right, value, d + 1);
    };

    const d = depthRec(this.root, value, 0);
    return d >= 0 ? d : null;
  }

  // isBalanced: Check if the tree is balanced (every node’s left/right height difference is no more than 1).
  isBalanced(node = this.root) {
    const checkBalanced = (node) => {
      if (node === null) return { balanced: true, height: -1 };
      const left = checkBalanced(node.left);
      const right = checkBalanced(node.right);
      const balanced =
        left.balanced &&
        right.balanced &&
        Math.abs(left.height - right.height) <= 1;
      const height = Math.max(left.height, right.height) + 1;
      return { balanced, height };
    };
    return checkBalanced(node).balanced;
  }

  // rebalance: Rebalance the tree using an inOrder traversal array of node data.
  rebalance() {
    // Get an inOrder array of current tree values.
    const nodes = [];
    this.inOrder((node) => nodes.push(node.data));
    // Since all values in a BST should be unique, we can rebuild directly.
    this.root = this.buildTree(nodes);
  }
}

// prettyPrint: A helper function for visually printing the BST.
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

// --------------------- DRIVER SCRIPT ------------------------ //

// Helper: Generate an array of random numbers (0 to max-1)
function generateRandomNumbers(count, max) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(Math.floor(Math.random() * max));
  }
  return arr;
}

// 1. Create a BST from an array of random numbers less than 100.
const randomNumbers = generateRandomNumbers(10, 100);
const tree = new Tree(randomNumbers);

console.log("Initial array (random numbers):", randomNumbers);
// console.log("Initial Tree Root:");
// console.log(tree.root);
console.log("Initial tree (balanced):");
prettyPrint(tree.root);
// 2. Confirm that the tree is balanced.
console.log("Is tree balanced?", tree.isBalanced());

// 3. Print out all elements in level, inOrder, preOrder, and postOrder traversals.
console.log("\nLevel Order Traversal:");
tree.levelOrder((node) => console.log(node.data));

console.log("\nIn Order Traversal:");
tree.inOrder((node) => console.log(node.data));

console.log("\nPre Order Traversal:");
tree.preOrder((node) => console.log(node.data));

console.log("\nPost Order Traversal:");
tree.postOrder((node) => console.log(node.data));

// 4. Unbalance the tree by adding several numbers greater than 100.
[101, 150, 200].forEach((num) => tree.insert(num));
console.log("\nTree after inserting values > 100 (unbalanced):");
prettyPrint(tree.root);

// Confirm that the tree is now unbalanced.
console.log("Is tree balanced after insertion?", tree.isBalanced());

// 5. Rebalance the tree.
console.log("\nRebalancing tree...");
tree.rebalance();
console.log("Tree after rebalancing:");
prettyPrint(tree.root);

// Confirm that the tree is balanced again.
console.log("Is tree balanced after rebalancing?", tree.isBalanced());

// 6. Print out all elements in level, inOrder, preOrder, and postOrder traversals after rebalancing.
console.log("\nLevel Order Traversal (after rebalancing):");
tree.levelOrder((node) => console.log(node.data));

console.log("\nIn Order Traversal (after rebalancing):");
tree.inOrder((node) => console.log(node.data));

console.log("\nPre Order Traversal (after rebalancing):");
tree.preOrder((node) => console.log(node.data));

console.log("\nPost Order Traversal (after rebalancing):");
tree.postOrder((node) => console.log(node.data));

// Extra Credit: HashSet class using HashMap internally.
