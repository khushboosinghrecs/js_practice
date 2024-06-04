class UndirectedGraph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjList = new Map();
    }

    addVertex(v) {
        this.adjList.set(v, []);
    }

    addEdge(u, v) {
        this.adjList.get(u).push(v);
        this.adjList.get(v).push(u); // Because the graph is undirected
    }

    detectCycle() {
        const visited = new Set();

        for (let vertex of this.adjList.keys()) {
            if (!visited.has(vertex)) {
                if (this.detectCycleUtil(vertex, visited, -1)) {
                    return true;
                }
            }
        }
        return false;
    }

    detectCycleUtil(v, visited, parent) {
        visited.add(v);

        const neighbors = this.adjList.get(v);
        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                if (this.detectCycleUtil(neighbor, visited, v)) {
                    return true;
                }
            } else if (neighbor !== parent) {
                return true; // There is a cycle
            }
        }

        return false;
    }
}

// Example usage for undirected graph:
const ug = new UndirectedGraph(4);
ug.addVertex(0);
ug.addVertex(1);
ug.addVertex(2);
ug.addVertex(3);
ug.addEdge(0, 1);
ug.addEdge(1, 2);
ug.addEdge(2, 0);
ug.addEdge(2, 3);

if (ug.detectCycle()) {
  console.log("Undirected graph contains cycle");
} else {
  console.log("Undirected graph does not contain cycle");
}

class DirectedGraph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjList = new Map();
    }

    addVertex(v) {
        this.adjList.set(v, []);
    }

    addEdge(u, v) {
        this.adjList.get(u).push(v);
    }

    detectCycle() {
        const visited = new Set();
        const recStack = new Set();

        for (let vertex of this.adjList.keys()) {
            if (!visited.has(vertex)) {
                if (this.detectCycleUtil(vertex, visited, recStack)) {
                    return true;
                }
            }
        }
        return false;
    }

    detectCycleUtil(v, visited, recStack) {
        if (!visited.has(v)) {
            visited.add(v);
            recStack.add(v);

            const neighbors = this.adjList.get(v);
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor) && this.detectCycleUtil(neighbor, visited, recStack)) {
                    return true;
                } else if (recStack.has(neighbor)) {
                    return true; // There is a cycle
                }
            }
        }

        recStack.delete(v);
        return false;
    }
}

// Example usage for directed graph:
const dg = new DirectedGraph(4);
dg.addVertex(0);
dg.addVertex(1);
dg.addVertex(2);
dg.addVertex(3);
dg.addEdge(0, 1);
dg.addEdge(1, 2);
dg.addEdge(2, 0);
dg.addEdge(2, 3);

if (dg.detectCycle()) {
  console.log("Directed graph contains cycle");
} else {
  console.log("Directed graph does not contain cycle");
}
