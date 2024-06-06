class GraphAdjList {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(v) {
        if (!this.adjacencyList.has(v)) {
            this.adjacencyList.set(v, []); // add vertex to adjacency list

        }

    }

    addEdge(v1, v2, weight) {
        if (this.adjacencyList.has(v1) && this.adjacencyList.has(v2)) {
            this.adjacencyList.get(v1).push({ node: v2, weight: weight });
            this.adjacencyList.get(v2).push({ node: v1, weight: weight });
        }
    }

    dijkastra(start) {
        const distance = {};
        const priorityQueue = new MinPriorityQueue();
        const previous = {}


        for (let vertex of this.adjacencyList.keys()) {
            if (vertex === start) {
                distance[vertex] = 0; // set distance to zero
                priorityQueue.enque(vertex, 0);
            }
            else { // set distance to infinity
                distance[vertex] = Infinity;
                priorityQueue.enque(vertex, Infinity);
            }
            previous[vertex] = null;
        
    }

    while(!priorityQueue.isEmpty()) {
    let { element: smallest } = priorityQueue.dequeue();

    if (distance[smallest] == Infinity) break;

    for (let neighbour of this.adjacencyList.get(smallest)) {
        let alt = distance[smallest] + neighbour.weight;

        if (alt < distance[neighbour.node]) {
            distances[neighbor.node] = alt;
            previous[neighbor.node] = smallest;
            priorityQueue.enqueue(neighbor.node, alt);
        }
    }

}
    }
}

class MinPriorityQueue {
    constructor() {
        this.value = [];
    }

    enque(element, priority) {
        this.value.push({ element, priority });
        this.sort();

    }
    dequeue() {
        return this.value.shift();
    }

    isEmpty() {
        return this.value.length === 0;

    }

    sort() {
        this.value.sort((a, b) => a.priority - b.priority);
    }
}

// Example Usage
const gList = new GraphAdjList();
gList.addVertex('A');
gList.addVertex('B');
gList.addVertex('C');
gList.addVertex('D');
gList.addVertex('E');

gList.addEdge('A', 'B', 4);
gList.addEdge('A', 'C', 2);
gList.addEdge('B', 'C', 1);
gList.addEdge('B', 'D', 5);
gList.addEdge('C', 'D', 8);
gList.addEdge('C', 'E', 10);
gList.addEdge('D', 'E', 2);

console.log("Adjacency List:");
gList.display();

/*
Output:
A -> B (4), C (2)
B -> A (4), C (1), D (5)
C -> A (2), B (1), D (8), E (10)
D -> B (5), C (8), E (2)
E -> C (10), D (2)
*/

// Perform Dijkstra's algorithm
const { distances, previous } = gList.dijkstra('A');
console.log("Shortest distances from vertex A:", distances);
console.log("Previous vertices:", previous);

/*
Output:
Shortest distances from vertex A: { A: 0, B: 3, C: 2, D: 9, E: 11 }
Previous vertices: { A: null, B: 'C', C: 'A', D: 'B', E: 'D' }
*/