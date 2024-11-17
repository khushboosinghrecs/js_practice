function orangeRoting = function(grid){
    const rows = grid.length;
    const cols = grid[0].length;
    let queue = [];
    let freshcount = 0;

    const directions = [[-1, 0],
[1, 0],
[0, -1],
[0, 1],


for(r =0; r<rows; r++){
    for(let c=0; c<cols; c++){
        if(grid[r][c]===2){
            queue.push([r, c]);
        }else if(grid[r][c] ===1){
            freshcount++;
        }
    }
}
if(freshcount ===0) return 0;
let minutes =0;

while(queue.length> 0){
    let newQueue = [];

    while(queue.length> 0){
        const [r, c] = queue.shift();
        for(const [dr, dc] of directions){
            const nr = r + dr;
            const nc = c+ dc;
            if(nr>=0 && nr<rows && nc>=0 && nc<cols && grid[nr][nc] ===1){
                grid[nr][nc] = 2;
                newQueue.push([nr, nc]);
                freshcount --;
            }
        }
        
    }

    if(newQueue.length> 0){
        minutes++;
        queue = newQueue;
    }
}

return freshcount ===0 ? minutes : -1;

}
