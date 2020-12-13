export function generateMaze(grid, startNode, endNode){
    const walls = []
    for(let i of grid){
        for(let j of i){
            if(j!==startNode&&j!==endNode){
                j.isWall=true
            }
        }
    }
    let current = startNode
    const stack = []
    current.isVisited = true
    while(true){
        const neighbours = getNeighbours(current, grid)
        if(neighbours.length > 0){
            const r = Math.floor(Math.random()*neighbours.length)
            const next = neighbours[r]
            next.isVisited = true
            if(next.row > current.row){
                grid[current.row+1][current.col].isWall = false
            }
            else if(next.row < current.row){
                grid[current.row-1][current.col].isWall = false
            }
            else if(next.col < current.col){
                grid[current.row][current.col-1].isWall = false
            }
            else if(next.col > current.col){
                grid[current.row][current.col+1].isWall = false
            }
            stack.push(current)
            next.isWall = false
            current = next
        }
        else if(stack.length > 0){
            current = stack.shift()
        }
        else{
            break
        }

    }

    for(let i of grid){
        for(let j of i){
            if(j.isWall && !j.isStart && !j.isEnd){
                walls.push(j)
            }
        }
    }

    return walls
    
}
function getNeighbours(node, grid) {
    const neighbours = [];
    const {row, col} = node;
    if(row-1>0){neighbours.push(grid[row-2][col])};
    if(row+1<grid.length-1){neighbours.push(grid[row+2][col])};
    if(col-1>0){neighbours.push(grid[row][col-2])};
    if(col+1<grid[0].length-1){neighbours.push(grid[row][col+2])};

    return (neighbours.filter(neighbour => !neighbour.isVisited));
}