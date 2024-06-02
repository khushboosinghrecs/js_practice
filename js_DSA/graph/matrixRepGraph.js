class Graph{
    constructor(numberOfVertices){
        this.adjacncyMat= new Array(numberOfVertices);
        for(let i=0; i<numberOfVertices; i++){
            this.adjacncyMat[i]= new Array(numberOfVertices);
            for(let j=0; j<numberOfVertices; j++){
                this.adjacncyMat[i][j]=0;
            }

        }
    }
    addEdge(v1, v2){
        this.adjacncyMat[v1][v2]=1;
        this.adjacncyMat[v2][v1]=1;
    }

    removeEdge(v1, v2){
        this.adjacncyMat[v1][v2]=0;
        this.adjacncyMat[v2][v1]=0;
    }
    printMat(){
        for(let i=0; i< this.adjacncyMat.length; i++){
            console.log(this.adjacncyMat[i]);
        }

    }

    addVertex(){
        this.adjacncyMat.push(new Array(this.adjacncyMat.length));
        for(let i=0; i< this.adjacncyMat.length; i++){
            this.adjacncyMat[i].push(0);
        }

    }
    isCycle(V, grid) {
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
}