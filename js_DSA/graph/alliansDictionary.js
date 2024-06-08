function findOrder(dict, n, k){

    let graph = new Map();
    for(let i=0; i<k; i++){
        graph.set(String.fromCharCode(97 +i), []);
    }

    const addEdge = (from, to) =>{
        graph.set(from).push(to);
    }


    for(let i=0; i<n-1; i++){
        let word1 = dict[i];
        let  word2 = dict[i+1];

        let minLength = Math.min(word1.length, word2.length);

        for(let j=0; j<minLength; j++){
            if(word1[j] != word2[j]){
                addEdge(word1, word2);
                break;
            }
        }
    }


    const topologicalSort = (graph) =>{
        let inDegree = new Map();
        for(let node of graph.keys()){
            inDegree.set(node , 0);
        }

        for(let [node, neighbours] of graph.entries()){
            for(let neighbour of neighbours){
                inDegree.set(neighbour, inDegree.get(neighbour)+1);
            }
        }

        let queue =[];
        for(let [node, degree] of inDegree.entries()){
            if(degree === 0){
                queue.push(node);
            }
        }

        let order =[];

        while(queue.length > 0){
            let current = queue.shift();
            order.push(current);

            for(let neighbour of graph.get(current)){
                inDegree.set(neighbour, inDegree.get(neighbour) -1);
                if(inDegree.get(neighbour ===0)){
                    queue.push(neighbour);
                }
            }
        }

        if(order.length !== graph.size){
            return '';
        }

        return order.join(' ');
    }

    return topologicalSort(graph);

}

const N = 5, K = 4;
const dict = ["baa", "abcd", "abca", "cab", "cad"];
console.log(findOrder(dict, N, K));  // Output: "b d a c"

// Cycle Detection:
// // 
// If the graph contains a cycle, there will be at least one node that is part of a cycle and will never reach an in-degree of 0.
// Therefore, the queue will empty before all nodes are processed, leaving some nodes unprocessed.c