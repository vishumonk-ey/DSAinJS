function Djikstra(src, destination) {
    const buildings = [
      "Amenities","B-Model","Cafe-inn","Clock_Tower","D_Quarter","Director","Gate_1","Gate_2","GYM","Graveyard","Guest_House","H-13","H-14","H-15","H-16","Hospital","Hostels","IC","Ihall","LHC","Library","Lords","LT","Macdonald","Madhusudan","Main_Building","MN_Dastur","NB","Nivedita","Oval","Pandya","Richardson","RT","Sen","Sengupta","SNT","Slater_Hall","Students-Canteen","Thousand_seater","Wolfenden"
    ];
  
    const lookupMap = new Map();
    buildings.forEach((b, i) => lookupMap.set(b, i));
  
    const edges = [
      ["Gate_1", "Guest_House", 10],["Guest_House", "RT", 5],["RT", "Amenities", 5],
      ["NB", "Amenities", 7],["NB", "Main_Building", 6],["Guest_House", "NB", 10],
      ["Guest_House", "Students-Canteen", 5],["Students-Canteen", "Ihall", 1],
      ["Main_Building", "Ihall", 3],["Main_Building", "Library", 5],
      ["NB", "Lords", 1],["H-14", "Lords", 3],["H-14", "Sen", 1],["H-14", "H-15", 2],
      ["Sen", "H-15", 2],["H-16", "H-15", 2],["Sengupta", "H-15", 2],["H-16", "Sengupta", 1],
      ["Library", "Lords", 3],["Library", "D_Quarter", 9],["Richardson", "Amenities", 5],
      ["Richardson", "Macdonald", 3],["Macdonald", "Sen", 6],["D_Quarter", "Thousand_seater", 3],
      ["Guest_House", "Graveyard", 6],["Pandya", "Graveyard", 2],["MN_Dastur", "Graveyard", 7],
      ["MN_Dastur", "IC", 3],["Ihall", "IC", 5],["MN_Dastur", "LHC", 10],["SNT", "LHC", 5],
      ["SNT", "IC", 12],["LHC", "IC", 8],["SNT", "Cafe-inn", 7],["Thousand_seater", "Cafe-inn", 18],
      ["SNT", "B-Model", 7],["LHC", "B-Model", 5],["Clock_Tower", "Graveyard", 2],
      ["Clock_Tower", "B-Model", 15],["Clock_Tower", "Pandya", 3],["Clock_Tower", "Wolfenden", 9],
      ["Clock_Tower", "Hospital", 4],["Hospital", "Pandya", 2],["Hospital", "Wolfenden", 3],
      ["Nivedita", "Wolfenden", 3],["Nivedita", "Hostels", 3],["Gate_2", "Hostels", 4],
      ["Slater_Hall", "Hostels", 2],["Slater_Hall", "Nivedita", 6],["H-13", "Nivedita", 8],
      ["LT", "Nivedita", 15],["H-13", "LT", 8],["SNT", "LT", 20],["B-Model", "LT", 15],
      ["Nivedita", "Oval", 2],["Oval", "Madhusudan", 3],["Director", "Madhusudan", 1],
      ["Oval", "GYM", 1],["B-Model", "Madhusudan", 7],["Director", "LT", 10],["Director", "H-13", 6],
    ];
  
    const adjList = Array.from({ length: buildings.length }, () => []);
    for (const [u, v, w] of edges) {
      const ui = lookupMap.get(u);
      const vi = lookupMap.get(v);
      adjList[ui].push([vi, w]);
      adjList[vi].push([ui, w]);
    }
  
    const src_node = lookupMap.get(src);
    const dest_node = lookupMap.get(destination);
    const dist = new Array(adjList.length).fill(Number.MAX_SAFE_INTEGER);
    const parent = new Array(adjList.length).fill(-1);
    const minHeap = new MinHeap();
  
    dist[src_node] = 0;
    minHeap.push([0, src_node]);
  
    while (minHeap.size() > 0) {
      const [d, u] = minHeap.pop();
      if (u === dest_node) break;
  
      for (const [v, w] of adjList[u]) {
        if (dist[u] + w < dist[v]) {
          dist[v] = dist[u] + w;
          parent[v] = u;
          minHeap.push([dist[v], v]);
        }
      }
    }
  
    // reconstruct path
    const path = [];
    let node = dest_node;
    while (node !== -1) {
      path.push(buildings[node]);
      node = parent[node];
    }
    path.reverse();
  
    console.log("Shortest Path:", path.join(" → "));
    console.log("Total Distance:", dist[dest_node]);
    return { distance: dist[dest_node], path };
  }
  
  console.log(Djikstra("Director", "Graveyard"));
  