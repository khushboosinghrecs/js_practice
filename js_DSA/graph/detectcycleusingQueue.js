class Graph{

    constructor(vertices){
        this.vertices = vertices;
        this.adjList = new Map();
    }

    addVertex(v){
        this.adjList.set(v, []);
    }

    addEdge(v, w){

        this.adjList.get(v).push(w);
    }

    detectCycle(){

        const visited = new Set();
        const queue = [];

        for(let vertex of this.adjList.keys()){
            if(!visited.has(vertex)){
               if( this.detectCycleUtil(vertex, visited, queue)) return true;
            }
        }

        return false;
    }

    detectCycleUtil(startvertex, visited, queue ){

        visited.add(startvertex);
        queue.push(startvertex);

        while(queue.length>0){

            const currentVertex = queue.shift();
            const neighbors = this.adjList.get(currentVertex);

            for(let neighbor of neighbors){

                if(!visited[neighbor]){
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
                else{
                    if(queue.inclueds(neighbor)){
                        return true;
                    }
                }
            }
        }

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