
function traverse(grid, startNode, visited){
    visited.push(startNode)
    const neighbours = getNeighbours(startNode, grid);
    const ns = neighbours.filter(n=>!visited.includes(n))
    for(let n of ns){
        if(n.isWall){continue}
        if(!n.isVisited){
            n.previous = startNode;
            n.isVisited = true
            traverse(grid, n, visited);
        }
    }
    return visited
}

export function DFS(grid, startNode, endNode) {
    startNode.isVisited = true
    const nodes = traverse(grid, startNode,[])
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
    if(col>0)neighbours.push(grid[row][col-1]);
    if(row>0)neighbours.push(grid[row-1][col]);
    if(row<grid.length-1)neighbours.push(grid[row+1][col]);
    
    if(col<grid[0].length-1)neighbours.push(grid[row][col+1]);

    return (neighbours);
}