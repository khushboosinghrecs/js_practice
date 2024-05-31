class GraphList{
constructor(node){
    this.adjacencyList = new Map();
}

addVertex(vertex){
    if(!this.adjacencyList.has(vertex)){
        this.adjacencyList.set(vertex) = [];
    }
}

addEdge(vertex1, vertex2){
    if(this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)){

        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);
    }
}

dfsstart(start){
    let visited = new Set();
    let result =[];

    const dfs = (vertex) =>{
        if(!visited) return null;

        visited.add(vertex);
        result.push(vertex);

        const destinations = this.adjacencyList.get(vertex);

        for(let destination of destinations){
            if(!visited.has(destination)){
                dfs(destination);
            }
        }
    }
    dfs(start);
    return result;

}
display(){
    for(let [vertex, edges] of this.adjacencyList){
        console.log(vertex + '->' + edges.join(','));
    }
}
removeEdge(v1, v2){
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v1 !=v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v =>v!=v1);
}

bfs(start){
    const visited = new Set();
    const queue = [start];

    while(queue.length > 0){
        const currnode= queue.shift();
        const destinations = this.adjacencyList.get(currnode);

        for(let destination of destinations){
            if(!visited.has(destination)){
                visited.add(destination);
                queue.push(destination);
                
            }
        }
    }

}
}