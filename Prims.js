function PrimsMST(graph){
    const key = new Array(graph.length).fill(Number.MAX_SAFE_INTEGER)
    const parent = new Array(graph.length).fill(null)
    const inMST = new Array(graph.length).fill(false)
    key[0] = 0
    function findMinVertex(){
        let min = Number.MAX_SAFE_INTEGER
        let minIndex = -1
        for( let i = 0 ; i < graph.length ; i++ ){
            if(!inMST[i] && key[i] < min){
                min = key[i]
                minIndex = i
            }
        }
    }
    for(let i = 0 ; i < graph.length ; i++){
        //selection
        const u = findMinVertex()
        //update 
        inMST[u] = true
        for (const [v,weight] of graph[u]) {
            if(!inMST[v] && key[v] > weight){
                key[v] = weight
                parent[v] = u
            }
        }
        
    }
}


function Dijkstra(graph){
    let dist = new Array(graph.length).fill(Number.MAX_SAFE_INTEGER)
    let processed = new Array(graph.length).fill(false)
    let parent = new Array(graph.length).fill(null)
    dist[0] = 0
    for( let i = 0 ; i < graph.length ; i++){
        const u = findMinDist()
        processed[u] = true
        for (const [v,weight] of graph[u]) {
            if(!processed[v] && weight + dist[u] < dist[v]){
                dist[v] = dist[u] + weight
                parent[v] = u
            }
        }
    }
    function findMinDist(){
        let minDist = Number.MAX_SAFE_INTEGER 
        let minIndex = -1
        for( let i = 0 ; i < graph.length ; i++){
            if(!processed[u] && dist[u] < minDist){
                    minDist = dist[u]
                    minIndex = i
            }
        }
        return minIndex
    }
    // path reconstruction by going in backward direction from dest to src
}

function BellMannFord(edges , V  , src){
    const dist = new Array(V).fill(Number.MAX_SAFE_INTEGER)
    const parent = new Array(V).fill(null)
    dist[src] = 0
    for(let i = 0 ; i < V-1 ; i++){
        //relax each edge
        for (const [u,v,weight] of edges) {
            if(dist[v] > dist[u] + weight){
                parent[v] = u 
                dist[v] = dist[u] + weight
            }
        }
    }
    for (const [u,v,weight] of edges) {
        if( dist[v] > dist[u] + weight){
            return false
        }   
    }
}
/**
 * Floyd–Warshall: all-pairs shortest paths on a weighted directed graph.
 * 
 * Input:
 *   weightMatrix: NxN matrix where weightMatrix[i][j] is the edge weight from i->j,
 *                 or Number.POSITIVE_INFINITY if there is no direct edge.
 *                 weightMatrix[i][i] should be 0 for all i (or 0 will be set).
 *
 * Returns:
 *   {
 *     dist: NxN matrix of shortest path distances,
 *     next: NxN matrix where next[i][j] is the next vertex after i on the shortest path to j (or null if none),
 *     path: function(u, v) -> array of vertices in shortest path from u to v (inclusive) or null if none
 *   }
 */
function floydWarshall(weightMatrix) {
    const n = weightMatrix.length;
    // copy weights to dist (avoid mutating input)
    const dist = Array.from({ length: n }, (_, i) =>
      Array.from({ length: n }, (_, j) =>
        i === j ? 0 : (weightMatrix[i][j] ?? Number.POSITIVE_INFINITY)
      )
    );
  
    // next[i][j] stores the next node after i when going to j on a shortest path.
    // Initialize next[i][j] = j if there is a direct edge i->j
    const next = Array.from({ length: n }, () => Array(n).fill(null));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][j] !== Number.POSITIVE_INFINITY && i !== j) next[i][j] = j;
      }
    }
  
    // Main triple loop: try every vertex k as an intermediate point.
    for (let k = 0; k < n; k++) {
      for (let i = 0; i < n; i++) {
        // small micro-optimisation: skip if dist[i][k] is infinite
        if (dist[i][k] === Number.POSITIVE_INFINITY) continue;
        for (let j = 0; j < n; j++) {
          if (dist[k][j] === Number.POSITIVE_INFINITY) continue;
          // if going i -> k -> j is better than current i -> j, update
          const throughK = dist[i][k] + dist[k][j];
          if (throughK < dist[i][j]) {
            dist[i][j] = throughK;
            next[i][j] = next[i][k]; // first step from i to j goes via the first step to k
          }
        }
      }
    }
  
    // detect negative cycles: if dist[i][i] < 0 for some i then there's a neg-cycle reachable from i
    const hasNegativeCycle = dist.some((row, i) => row[i] < 0);
  
    // path reconstruction helper
    function reconstructPath(u, v) {
      if (next[u][v] === null) return null; // no path
      const path = [u];
      while (u !== v) {
        u = next[u][v];
        // defensive check (shouldn't loop unless negative cycle corrupted next)
        if (u == null) return null;
        path.push(u);
        if (path.length > n) return null; // safety: something went wrong (possible negative cycle)
      }
      return path;
    }
  
    return { dist, next, path: reconstructPath, hasNegativeCycle };
  }
  
/**
 * Swaps two elements in an array.
 * @param {number[]} arr - The array.
 * @param {number} i - Index of the first element.
 * @param {number} j - Index of the second element.
 */
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

/**
 * 1. Partitions the array around the pivot and returns the pivot's final index.
 * @param {number[]} arr - The array segment.
 * @param {number} low - The starting index of the segment.
 * @param {number} high - The ending index of the segment.
 * @returns {number} - The final index of the pivot.
 */
function partition(arr, low, high) {
    // The pivot is the element at the 'high' index after step 1.
    const pivot = arr[high]; 
    
    // i tracks the boundary for elements smaller than the pivot.
    let i = low - 1; 

    // j iterates through all elements from low to high-1.
    for (let j = low; j < high; j++) {
        // If current element is smaller than or equal to the pivot
        if (arr[j] <= pivot) {
            i++;
            // Move the smaller element (arr[j]) into the 'smaller than pivot' section
            swap(arr, i, j); 
        }
    }
    
    // Put the pivot element in its correct place (between the smaller and larger sections)
    swap(arr, i + 1, high);
    
    // Return the final index of the pivot
    return i + 1;
}

/**
 * Chooses a random index and swaps that element with the 'high' index 
 * to be used as the pivot in the partition step.
 * @param {number[]} arr - The array segment.
 * @param {number} low - The starting index.
 * @param {number} high - The ending index.
 */
function chooseRandomPivot(arr, low, high) {
    // Generate a random index between low and high (inclusive)
    const randomIndex = Math.floor(Math.random() * (high - low + 1)) + low;
    
    // Swap the element at the random index with the last element (high)
    // The 'partition' function will now use this randomly selected element as the pivot.
    swap(arr, randomIndex, high);
}


/**
 * 3. The recursive function for Randomized Quick Sort.
 * @param {number[]} arr - The array to sort.
 * @param {number} low - The starting index.
 * @param {number} high - The ending index.
 */
function randomizedQuickSort(arr, low, high) {
    if (low < high) {
        
        // 1. RANDOM PIVOT SELECTION
        chooseRandomPivot(arr, low, high);
        
        // 2. PARTITIONING
        // pi is the partitioning index, where arr[pi] is now in its correct sorted position
        const pi = partition(arr, low, high); 

        // 3. RECURSION
        // Recursively sort the elements before the partition index
        randomizedQuickSort(arr, low, pi - 1);
        
        // Recursively sort the elements after the partition index
        randomizedQuickSort(arr, pi + 1, high);
    }
}

// --- Example Usage ---
const data = [10, 80, 30, 90, 40, 50, 70];
const n = data.length;

randomizedQuickSort(data, 0, n - 1);

console.log("Sorted Array:", data);
function heapSort(){}