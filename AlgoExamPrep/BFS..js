function BFS(graph , s){
    const bfs = []
    const queue = []
    const visited = new Array(graph.length).fill(false)
    queue.push(s)
    bfs.push(s)
    visited[s] = true
    while(queue.length!=0){
        const u = queue.shift()
        for (const v of graph[u]) {
            if(!visited[v]){
                bfs.push(v)
                queue.push(v)
                visited[v] = true
            }
        }

    }
    console.log(bfs)
}
let graph = [
    [1, 2],
    [0, 3, 4],
    [0, 5],
    [1],
    [1, 6],
    [2, 7],
    [4, 8, 9],
    [5],
    [6],
    [6]
  ];

// BFS(graph , 0)


// const dfs = []
function DFS(graph , start){
    const visited = new Array(graph.length).fill(false)
    const dfs = []
    dfs.push(start)
    visited[start] = true
    for(let i = 0 ; i < graph.length ; i++){
        DFSVisit(i , graph)
    }
    console.log(dfs)
    function DFSVisit(u,graph){
        for (const v of graph[u]) {
            if(!visited[v]){
                dfs.push(v)
                visited[v] = true
                DFSVisit(v,graph)
            }
        }
    }
}
DFS(graph , 0)

