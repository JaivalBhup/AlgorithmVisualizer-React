function traverse(grid, startNode) {
    const queue = []
    const visited = []
    startNode.isVisited = true
    queue.push(startNode)
    while(queue.length>0){
        const current = queue.shift()
        visited.push(current)
        const neighbours = getNeighbours(current, grid)
        for(let n of neighbours){
            if(!n.isVisited && !n.isWall){
                queue.push(n)
                n.previous = current
                n.isVisited = true
            }
        }
    }
    return visited
}

export function BFS(grid, startNode, endNode) {
    const nodes = traverse(grid, startNode)
    const t = []
    for(let n of nodes){
        if(n===endNode){return t}
        t.push(n)
    }
    return -1
}

function getNeighbours(node, grid) {
    const neighbours = [];
    const {row, col} = node;
    if(row>0)neighbours.push(grid[row-1][col]);
    if(row<grid.length-1)neighbours.push(grid[row+1][col]);
    if(col>0)neighbours.push(grid[row][col-1]);
    if(col<grid[0].length-1)neighbours.push(grid[row][col+1]);

    return (neighbours.filter(neighbour => !neighbour.isVisited));
}