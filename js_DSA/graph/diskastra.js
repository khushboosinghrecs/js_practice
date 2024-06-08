function ShortestPath(n, m, edges, src){
    const adjList = new Map();
    
    for(i =0; i<n; i++){
        adjList.set(i, [])
    }

    edges.forEach(([u, v])=>{
        console.log(u, v);
        adjList.get(u).push(v);
        adjList.get(v).push(u);
    })

    const distance = Array(n).fill(Infinity);
    distance[src] =0;

    const queue = [src];

    while(queue.length>0){
        const currNode = queue.shift();
        adjList.get(currNode).forEach(neighbout=>{
            if(distance[neighbout] === Infinity){
                distance[neighbout] = distance[currNode] +1;
                queue.push(neighbout);
            }
        })
    }

    return distance;
}

n = 9
m = 10
edges = [[0, 1], [0, 3], [3, 4], [4, 5], [5, 6], [1, 2], [2, 6], [6, 7], [7, 8], [6, 8]]
src = 0;

ShortestPath(n, m, edges, src)
console.log(ShortestPath(n, m, edges, src))  