export function AStar(grid,startNode,endNode) {
    if (!startNode || !endNode || (startNode === endNode)){
        return false;
    }
    const open = []
    const closed = []
    open.push(startNode);
    while(true){
        if(open.length > 0){
            let lowestIndex = 0
            for(let i = 0; i<open.length; i++){
                if (open[i].f < open[lowestIndex].f){
                    lowestIndex = i
                }
            }
            const currentNode = open[lowestIndex]
            if(currentNode === endNode){
                return closed
            }
            closed.push(currentNode)
            currentNode.isVisited = true
            const index = open.indexOf(currentNode)
            if(index>-1){
                open.splice(index,1)
            }
            const neighbours = getNeighbours(currentNode, grid)
            for(let n of neighbours){
                if(!n.isWall && !(closed.includes(n))){
                    const trackG = currentNode.g + 1
                    if(open.includes(n)){
                        if(n.g>trackG){
                            n.h = getH(n, endNode)
                            n.g = trackG
                            n.f = n.g + n.h
                        }
                    }
                    else{
                        n.h = getH(n, endNode)
                        n.g = trackG
                        n.f = n.g + n.h
                        open.push(n)
                    }
                    n.previous = currentNode
                }
            }

        }
        else{
            return -1
        }
    }
}

function getH(node1,node2) {
    let p =  Math.abs(node1.row - node2.row) + Math.abs(node1.col-node2.col)
    return p
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