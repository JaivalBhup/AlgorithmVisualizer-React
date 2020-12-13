
export function GBS(grid, startNode, endNode){
    const queue = []
    const visited = []
    startNode.f = getH(startNode, endNode)
    startNode.isVisited = true
    queue.push(startNode)
    while(queue.length > 0){
        sortByCost(queue)
        const currentNode = queue.shift()
        
        visited.push(currentNode)
        if(currentNode === endNode){
            return visited;}
        const neighbours = getNeighbours(currentNode, grid)
        for(let n of neighbours){
            if(n.isWall) continue
            queue.push(n)
            n.f = getH(n, endNode)
            n.previous = currentNode
            n.isVisited = true
            
        }
    }
    return -1
}

function sortByCost(q) {
    q.sort((n1,n2)=>n1.f - n2.f)
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

function getH(node1,node2) {
    let p =  Math.abs(node1.row - node2.row) + Math.abs(node1.col-node2.col)
    return p
}