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