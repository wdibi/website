# Exam Review
### Practice 1
```java
public class ArrayListInt {
    final int GROWTH_FACTOR = 2 ;
    int [] arr;
    int size;
    public ArrayListInt() { ... }
    public ArrayListInt(int numElements) { ... }
    private void grow() {
        // TODO: Grows the member array by the growth factor
    }
}
```
### Practice 1: Solution
```java
public void grow() {
    int newSize = (arr.length + 1) * GROWTH_FACTOR;
    int[] newArray = new int[newSize];
    for (int i = 0; i < arr.length; i++) {
        newArray[i] = arr[i];
    }
    arr = newArr;
}
```
### Practice 2
```java
public class LinkedListInt {
    int size;
    Node head;
    class Node {
        int data;
        Node next;
        public Node(int d) { ... }
    }
    public LinkedListInt() { ... }
    public void add(int element) { ... }
    public void insert(int index, int element) { ... }
    public void remove(int index) { ... }
    public boolean hasLoop() {
        // TODO: Returns true if there is a loop within the Linked List
        // e.g. last node points back to a previous visited node
        // else false
    }
}
```
### Practice 2: Solution
```java
public boolean hasLoop() {
    Node curr = head;
    ArrayList<Node> visited = new ArrayList<Node>;
    while (curr != null) {
        if (visited.contains(curr)) {
            return true;
        }
        visited.add(curr);
        curr = curr.next;
    }
    return false;
}
```
### Practice 3a
```java
public double powerIterative(double a, int b) {
    // TODO: Computes a raised to the power of b iteratively
}
```
### Practice 3a: Solution
```java
public double powerIterative(double a, int b) {
    if (b < 0) {
        a = 1.0 / a;
        b = -1 * b;
    }
    double output = 1.0;
    for (int i = 0; i < b; b++) {
        output = output * a;
    }
    return output;
}
```
### Practice 3b
```java
public double powerRecursive(double a int b) {
    // TODO: Computes a raised to the power of b recursively
}
```
### Practice 3b: Solution
```java
public double powerRecursive(double a int b) {
    if (b == 0) {
        return 1;
    }
    if (b < 0) {
        a = 1.0 / a;
        b = -1 * b;
    }
    return a * powerRecursive(a, b - 1);
}
```
### Practice 4: Solution
#### Sort
| Sort Type      | Bubble | Insertion | Selection | Quick   | Merge   |
|----------------|--------|-----------|-----------|---------|---------|
| Big-O Run-Time | n²     | n²        | n²        | n log n | n log n |

#### Search
| Data Structure | Array | Linked List | Binary Search Tree | Hash Table |
|----------------|-------|-------------|--------------------|------------|
| Big-O Run-Time | n     | n           | log n              | 1          |

#### Insertion
| Data Structure | Array | Linked List | Binary Search Tree | Hash Table |
|----------------|-------|-------------|--------------------|------------|
| Big-O Run-Time | n     | n           | log n              | 1          |
### Practice 5
```java
public class BinaryTreeNodeInt {
    private int data;
    private BinaryTreeNodeInt left;
    private BinaryTreeNodeInt right;

    public BinaryTreeNodeInt(int element) { ... }
    public int getData() { ... }
    public BinaryTreeNodeInt getLeft() { ... }
    public BinaryTreeNodeInt getRight() { ... }
    public void setData(int element) { ... }
    public void addLeft(int element) { ... }
    public void setLeft(BinaryTreeNodeInt node) { ... }
    public void addRight(int element) { ... }
    public void setRight(BinaryTreeNodeInt node) { ... }
    public void printLevelBinaryTree(BinaryTreeNodeInt root) {
        // TODO: Prints using System.out.print or System.out.println the
        // value of each node at each depth of the Binary Tree
        // from left to right e.g.
        // 0
        // 1 2
        // 3 4 5 6
    }
}
```
### Practice 5: Solution
```java
public void printLevelBinaryTree(BinaryTreeNodeInt root) {
    Queue<BinaryTreeNodeInt> queue = new LinkedList<BinaryTreeNodeInt>();
    queue.add(root);
    queue.add(null);
    while (!queue.isEmpty()) {
        if (queue.peek() == null) {
            System.out.println("");
            queue.remove(0);
            if (queue.isEmpty()) {
                return;
            }
            queue.add(null);
        }
        BinaryTreeNodeInt node = queue.remove(0);
        if (node.getLeft() != null) {
            queue.add(node.getLeft());
        }
        if (node.getRight() != null) {
            queue.add(node.getRight());
        }
        System.out.print(node.getData() + " ");
    }
}
```
> Breadth First Traversal Method

### Practice 6
```java
class HeapNodeInt {
    private int data;
    private int index;
    public HeapNodeInt(int element, int n) { ... }
    public int getData() { ... }
    public int getIndex() { ... }
    public void setData(int element) { ... }
    public void setIndex(int index) { ... }
}
public class MaxHeapInt {
    private ArrayList<HeapNodeInt> heap;
    public MaxHeapInt() { ... }
    public HeapNodeInt getRoot() { ... }
    public HeapNodeInt getLeft() { ... }
    public HeapNodeInt getRight() { ... }
    public HeapNodeInt getParent() { ... }
    public void addNode(int element) { ... }
    private void swap(HeapNodeInt nodeA, HeapNodeInt nodeB) { ... }
    public void deleteRoot() {
        // TODO: Deletes the the root while maintaining the Heap structure
    }
}
```
### Practice 6: Solution
```java
public void deleteRoot() {
    if (heap.size() < 2) {
        heap = new ArrayList < HeapNodeInt > ();
        return;
    }
    heap.set(0, heap.remove(heap.size() - 1));
    HeapNodeInt node = heap.get(0);
    while (true) {
        if (node.getLeft() != null &&
            node.getRight() == null &&
            node.getLeft().getData() > node.getData()) {
            swap(node, node.getLeft());
        } else if (node.getLeft().getData() > node.getRight().getData() &&
                   node.getLeft().getData() > node.getData()) {
            swap(node, node.getLeft());
        } else if (node.getRight().getData() > node.getLeft().getData() &&
                   node.getRight().getData() > node.getData()) {
            swap(node, node.getRight());
        } else {
            break;
        }
    }
}
```
>Bubble Down Method

<a name="notes"></a>
## Notes
<a name="notes-binary-search-tree"></a>
### Binary Search Tree
#### Traversal
![](https://www.geeksforgeeks.org/wp-content/uploads/2009/06/tree12.gif)

- **Depth First Traversals:**
    - [Preorder](#extra-sample-code-depth-first-traversal) (Root, Left, Right) : 1 2 4 5 3
    - Inorder (Left, Root, Right) : 4 2 5 1 3
    - Postorder (Left, Right, Root) : 4 5 2 3 1

- **Breadth First or Level Order Traversal:** 1 2 3 4 5

#### Operations
- [Delete node](#extra-sample-code-binary-search-tree)
    1. **Node to be deleted is leaf**: Simply remove from the tree.
    2. **Node to be deleted has only one child**: Copy the child to the node and delete the child
    3. **Node to be deleted has two children**: Find inorder successor of the node. Copy contents of the inorder successor to the node and delete the inorder successor.
        Note that inorder predecessor can also be used.

<a name="notes-graphs"></a>
### Graphs
- **Undirected edges** point in both directions
- Graphs with only directed edges are known as **directed graphs**
- Graphs with undirected edges are known as **undirected graphs**
![](http://www2.imm.dtu.dk/projects/graph/images/fig_graph_structures/cyclicVSacyclic.png)
- **Directed Acyclic Graph (DAG)**, unable to return to your parent

<a name="notes-hashing"></a>
### Hashing
- **Hash Function**: Takes an input and returns and index to store the value at input hash
    1. Knuth Hash
        - `f(x) = x * (x + c) % n` where `c` is a prime number
    2. Multiplicative Hash
        - Let `s` be a randomly generated real number
        - `h = |x * s|` and `d` be the decimal digits of `h`
        - `f(x) = floor(d * n)` where `n` is a power of `2`
- **Hash Table**: Takes in x, hash x, store x in bucket
- **Hash Map**: Key, value store <key, value>. Hash key and store value at key hash
- **Hash Set**: Hash table, but all elements are unique
- **Load Factor**: `m/n` where `m` is # of elements and `n` is # of buckets
- **Collisions**: When multiple elements hash to the same bucket. Occurs with a high load factor
- **Rehash**: Increase number of buckets to decrease load factor

<a name="notes-heaps"></a>
### Heaps
- Max or Min value stored at root
- Delete root "bubble down"
    1. Replace root with last leaf.
    2. Bubble down node to current position
- [Add node](#extra-sample-code-add-node-to-heap) "bubble up"
    1. Add node as last leaf
    2. Bubble up until node is no longer larger than its parent

<a name="extra-sample-code"></a>
## Extra Sample Code
<a name="extra-sample-code-depth-first-traversal"></a>
### Depth First Traversal
#### Iterative
```java
public void dfsIterative(BinaryTreeNodeInt root, ArrayList<Integer> path) {
    if (root == null) {
        return;
    }
    Stack<BinaryTreeNodeInt> nodeStack = new Stack<BinaryTreeNodeInt>();
    nodeStack.push(root);
    while (!nodeStack.empty()) {
        BinaryTreeNodeInt currNode = nodeStack.pop();
        path.add(currNode.getData());
        if (currNode.getRight() != null) {
            nodeStack.push(currNode.getRight());
        }
        if (currNode.getLeft() != null) {
            nodeStack.push(currNode.getLeft());
        }
    }
}
```
#### Recursive
```java
public void dfsRecursive(BinaryTreeNodeInt root, ArrayList<Integer> path) {
    if (root == null) {
        return;
    }
    BinaryTreeNodeInt left = root.getLeft();
    BinaryTreeNodeInt right = root.getRight();
    path.add(root.getData());
    dfsRecursive(left);
    dfsRecursive(right);
}
```
<a name="extra-sample-code-add-node-to-heap"></a>
### Add Node to Heap
```java
public void addNode(int element) {
    HeapNodeInt newNode = new HeapNodeInt(element, heap.size());
    heap.add(newNode);
    while (newNode.getData() > getParent(newNode).getData()) {
        swap(newNode, getParent(newNode));
    }
}
```
<a name="extra-sample-code-binary-search-tree"></a>
### Binary Search Tree
#### Add Node
```java
private void addNode(BinaryTreeNodeInt root, int element) {
    // If root is larger than the element
    if (root.getData() >= element) {
        // Element must reside in the left subtree
        if (root.getLeft() != null) {
            addNode(root.getLeft(), element);
        } else {
            root.addLeft(element);
        }
    }
    // If root is smaller than the element
    if (root.getData() < element) {
        // Element must reside in the right subtree
        if (root.getRight() != null) {
            addNode(root.getRight(), element);
        } else {
            root.addRight(element);
        }
    }
}
```
#### Contains Node
```java
private Boolean containsNode(BinaryTreeNodeInt root, int element) {
    // If root is larger than the element
    if (root.getData() > element) {
        // Element must reside in the left subtree
        if (root.getLeft() != null) {
            return false || containsNode(root.getLeft(), element);
        } else {
            return false;
        }
    }
    // If root is smaller than the element
    if (root.getData() < element) {
        // Element must reside in the right subtree
        if (root.getRight() != null) {
            return false || containsNode(root.getRight(), element);
        } else {
            return false;
        }
    }
    // Else we must have found our element
    return true;
}
```
#### Delete node
```java
private void deleteNode(BinaryTreeNodeInt root, BinaryTreeNodeInt parent, int element) {
    // If root is larger than the element
    if (root.getData() > element) {
        // Element must reside in the left subtree
        if (root.getLeft() != null) {
            deleteNode(root.getLeft(), root, element);
        }
    }
    // If root is smaller than the element
    if (root.getData() < element) {
        // Element must reside in the right subtree
        if (root.getRight() != null) {
            deleteNode(root.getRight(), root, element);
        }
    }
    // We have found the node
    if (root.getData() == element) {
        // If the node found is a leaf node
        if (root.getLeft() == null && root.getRight() == null) {
            if (parent.getLeft() != null && parent.getLeft().getData() == root.getData()) {
                parent.setLeft(null);
            } else {
                parent.setRight(null);
            }
        // If the node found has one child
        } else if (root.getLeft() != null && root.getRight() == null) {
            if (parent.getLeft() != null && parent.getLeft().getData() == root.getData()) {
                parent.setLeft(root.getLeft());
            } else {
                parent.setLeft(root.getRight());
            }
        } else if (root.getLeft() == null && root.getRight() != null) {
            if (parent.getLeft() != null && parent.getLeft().getData() == root.getData()) {
                parent.setRight(root.getLeft());
            } else {
                parent.setRight(root.getRight());
            }
        // If the node found has two children
        } else {
            int min = findMin(root.getRight());
            root.setData(min);
            deleteNode(root.getRight(), root, min);
        }
    }
}
```

Last updated: 570416798.945678