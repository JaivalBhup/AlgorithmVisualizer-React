
 export function dijkstra(grid, startNode, endNode){
    if (!startNode || !endNode || (startNode === endNode)){
        return false;
    }
    changeFtoInfinity(grid)
    const path = [];
    startNode.f = 0;
    const unvisitedNodes = getAllNodes(grid);
    while(!!unvisitedNodes.length){
        sortNodes(unvisitedNodes);
        const nextNode = unvisitedNodes.shift();
        if (nextNode.isWall) continue;
        if (nextNode.f === Infinity) return -1;
        nextNode.isVisited = true
        path.push(nextNode)
        if(nextNode === endNode) return path
        updateNeighbour(nextNode, grid)
    }
     
}

function sortNodes(n){
    n.sort((n1, n2) => n1.f - n2.f );
}

function updateNeighbour(node,grid) {
    const neighbours = getNeighbours(node, grid);
    for(const n of neighbours){
        n.f = node.f + 1;
        n.previous = node
    }
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

function getAllNodes(grid){
    const nodes = [];
    for(let i of grid){
        for(let j of i){
            nodes.push(j);
        }
    }
    return nodes;
}

function changeFtoInfinity(grid) {
    for(let i of grid){
        for(let j of i){
            j.f = Infinity
        }
    }
}

export function getPath(endNode) {
    const path = []
    let cn = endNode
    while(cn !== null){
        path.unshift(cn)
        cn = cn.previous
    }
    return path
}