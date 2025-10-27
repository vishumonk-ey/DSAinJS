class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this._heapifyUp(this.heap.length - 1);
  }

  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown(0);
    return min;
  }

  size() {
    return this.heap.length;
  }

  _heapifyUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.heap[parent][0] <= this.heap[index][0]) break;
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      index = parent;
    }
  }

  _heapifyDown(index) {
    const n = this.heap.length;
    while (true) {
      let smallest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;

      if (left < n && this.heap[left][0] < this.heap[smallest][0]) {
        smallest = left;
      }

      if (right < n && this.heap[right][0] < this.heap[smallest][0]) {
        smallest = right;
      }

      if (smallest === index) break;
      [this.heap[smallest], this.heap[index]] = [
        this.heap[index],
        this.heap[smallest],
      ];
      index = smallest;
    }
  }
}
function Djikstra(adj, src) {
  const minHeap = new MinHeap();
  const dist = new Array(adj.length).fill(Number.MAX_SAFE_INTEGER);
  minHeap.push([0, src]);
  dist[src] = 0;
  while (minHeap.size() > 0) {
    const [d, u] = minHeap.pop();
    for (const [v, weight] of adj[u]) {
      if (dist[u] + weight < dist[v]) {
        dist[v] = dist[u] + weight;
        minHeap.push([dist[v], v]);
      }
    }
  }
  return dist;
}
const adj = [
  // Node 0
  [
    [1, 4],
    [2, 7],
  ],
  // Node 1
  [
    [0, 4],
    [2, 2],
    [3, 5],
  ],
  // Node 2
  [
    [0, 7],
    [1, 2],
    [3, 1],
    [4, 8],
  ],
  // Node 3
  [
    [1, 5],
    [2, 1],
    [5, 6],
  ],
  // Node 4
  [
    [2, 8],
    [5, 3],
    [6, 9],
  ],
  // Node 5
  [
    [3, 6],
    [4, 3],
    [6, 2],
  ],
  // Node 6
  [
    [4, 9],
    [5, 2],
  ],
];
console.log(Djikstra(adj, 0));
