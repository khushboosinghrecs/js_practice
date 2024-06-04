class Graph{
    constructor(vertices){
        this.vertices = vertices;
        this.adjList = new Map();
    }

    addVertex(v){
        this.adjList.set(v, [])
    }

    addEdge(u, v){
        this.adjList.get(u).push(v);
    }

    detectCycle(){
        const visited = new Set();
        const recStack = new Set();

        for(let vertex of this.adjList.keys()){
            if(this.detectCycleUtill(vertex, visited, recStack)){
                return true;
            }
        }
        return false;
    }

    detectCycleUtill(v, visited, recStack){
        if(!visited[v]){

            visited.add(v);
            recStack.add(v);

            const neighbors = this.adjList.get(v);

            for(let neighbor of neighbors){
                if(!visited[neighbor] && this.detectCycleUtill(neighbor, visited, recStack) ){
                    return true;
                }
                else if(recStack.has(neighbor)){
                    return true;
                }
            }
        }

        recStack.delete(v);
        return false;
    }
}


// Example usage:
const g = new Graph(4);
g.addVertex(0);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);

if (g.detectCycle()) {
  console.log("Graph contains cycle");
} else {
  console.log("Graph does not contain cycle");
}