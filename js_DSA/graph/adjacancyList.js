class GraphAdjList{

    constructor() {
        this.adjacencyList = new Map();
    }

    // Adds a vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Adds an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1); // For undirected graph
        }
    }

     // addVertex(vertex){
    //     if(!this.adjacencyList[vertex]){
    //         this.adjacencyList[vertex]=[];
    //     }
    // }

    // addEdge(v1, v2){
    //     if(this.adjacencyList[v1] && this.adjacencyList[v2]){
    //         this.GraphAdjList[v1].push(v2);
    //         this.GraphAdjList[v].push(v1);

    //     }
    // }

    

    // DFS traversal from a starting vertex
    depthFirstSearch(start) {
        const result = [];
        const visited = new Set();

        const dfs = (vertex) => {
            if (!vertex) return null;
            console.log(vertex);  // For demonstration, prints the current vertex
            visited.add(vertex);
            result.push(vertex);

            const destinations = this.adjacencyList.get(vertex);
            for (const destination of destinations) {
                if (!visited.has(destination)) {
                    dfs(destination, visited);
                }
            }
        };

        dfs(start);
        return result;
    }

    // Displays the adjacency list of the graph
    display() {
        for (let [vertex, edges] of this.adjacencyList) {
            console.log(vertex + " -> " + edges.join(", "));
        }
    }
    removeEdge(v1, v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v!= v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v!= v1);
    }
     bfs(start) {
        const visited = new Set();
        const queue = [start];
        visited.add(destination);
        while (queue.length > 0) {
            const airport = queue.shift(); // mutates the queue
            const destinations = adjacencyList.get(airport);   
            for (const destination of destinations) {
                if (destination === 'BKK')  {
                    console.log(`BFS found Bangkok!`)
                }
                if (!visited.has(destination)) {
                    visited.add(destination);
                    queue.push(destination);
                }
            }
        }
    
    }

    display(){
        for(let v in this.GraphAdjList){
            console.log(v + '->', this.adjacencyList[vertex].join(','));
        }
    }
    function isCyclic(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
        const directions = [
          [-1, 0], // up
          [1, 0],  // down
          [0, -1], // left
          [0, 1],  // right
        ];
      
        const bfs = (row, col) => {
          let queue = [];
          visited[row][col] = true;
          queue.push([row, col, -1, -1]);
      
          while (queue.length > 0) {
            let [currentRow, currentCol, parentRow, parentCol] = queue.shift();
      
            for (const [dr, dc] of directions) {
              const newRow = currentRow + dr;
              const newCol = currentCol + dc;
      
              if (
                newRow >= 0 && newRow < rows &&
                newCol >= 0 && newCol < cols &&
                grid[newRow][newCol] === 0
              ) {
                if (!visited[newRow][newCol]) {
                  visited[newRow][newCol] = true;
                  queue.push([newRow, newCol, currentRow, currentCol]);
                } else if (newRow !== parentRow || newCol !== parentCol) {
                  return true;
                }
              }
            }
          }
          return false;
        };
      
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 0 && !visited[i][j]) {
              if (bfs(i, j)) return true;
            }
          }
        }
      
        return false;
      }
      isCyclic() {
        let visited = new Array(this.V).fill(false);
    
        // Helper function for BFS
        const bfs = (src) => {
          let queue = [];
          visited[src] = true;
          queue.push([src, -1]);  // node and its parent
    
          while (queue.length) {
            let [node, parent] = queue.shift();
    
            for (let neighbor of this.adjList.get(node)) {
              if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push([neighbor, node]);
              } else if (neighbor !== parent) {
                return true;
              }
            }
          }
          return false;
        }
    
        // Check all components of the graph
        for (let i = 0; i < this.V; i++) {
          if (!visited[i]) {
            if (bfs(i)) return true;
          }
        }
        return false;
      }
      
     
}

// Example Usage
const gList = new GraphAdjList();

// Adding vertices
gList.addVertex('A');
gList.addVertex('B');
gList.addVertex('C');
gList.addVertex('D');

// Display the adjacency list after adding vertices
console.log("Adjacency List after adding vertices:");
gList.display();

/*
Output:
A -> 
B -> 
C -> 
D -> 
*/

// Adding edges
gList.addEdge('A', 'B');
gList.addEdge('A', 'C');
gList.addEdge('B', 'D');
gList.addEdge('C', 'D');

// Display the adjacency list after adding edges
console.log("Adjacency List after adding edges:");
gList.display();