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
export function BFS1(grid, startNode) {
    const nodes = traverse(grid, startNode)
    if(nodes) return nodes;
    return -1
}

export function Bidirectional(grid, startNode, endNode) {
    const grid1 = grid.slice()
    const grid2 = grid.slice()
    const forward = traverse(grid1, startNode)
    const backward = traverse(grid2, endNode)
    console.log(backward)
    // console.log(forward)
    // console.log(backward)
    // let intersection = []
    // for(let f of forward){
    //     backward.slice().reverse().forEach((b)=>{
    //         if(f.row === b.row && f.col === b.col){
    //             intersection[0] = f
    //             intersection[1] = b
    //             const path1 = forward.splice(0, forward.indexOf(intersection[0]))
    //             const path2 = backward.splice(0, backward.indexOf(intersection[1]))
    //             return [path1, path2, intersection]
    //         }
    //     })
    // }
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