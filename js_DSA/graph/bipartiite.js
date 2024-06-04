/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const n = graph.length;
    const colors = new Array(n).fill(-1);

    const dfs = (node, color) => {
        colors[node] = color;

        for (let v of graph[node]) {
            if (colors[v] === -1) {
                if (dfs(v, 1 - color) === false) {
                    return false;
                }
            } else if (colors[v] === color) {
                return false;
            }
        }
        return true;
    };

    for (let i = 0; i < n; i++) {
        if (colors[i] === -1) {
            if (dfs(i, 0) === false) return false;
        }
    }
    return true;
};
