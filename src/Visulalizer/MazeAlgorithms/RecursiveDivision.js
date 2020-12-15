let walls = []
export function recursiveDivision(grid) {
    walls = []
    console.log(grid)
    addOuterWalls(grid)
    addInnerWalls(grid, true, 1, grid[0].length-2, 1, grid.length-2)
    return walls;
}

function addOuterWalls(grid) {
    for(let i = 0; i<grid.length; i++){
        if(i===0||i===grid.length-1){
            for (let j = 0; j < grid[0].length; j++) {
                if(!grid[i][j].isStart && !grid[i][j].isEnd){
                    walls.push(grid[i][j])
                    grid[i][j].isWall = true
                }
            }
        }
        else{
            if(!grid[i][0].isStart && !grid[i][0].isEnd){
                grid[i][0].isWall = true
                walls.push(grid[i][0]);
            }
            if(!grid[i][grid[0].length - 1].isStart && !grid[i][grid[0].length - 1].isEnd){
                grid[i][grid[0].length - 1].isWall = true
                walls.push(grid[i][grid[0].length - 1]);
            }
        }
    }
}
function addInnerWalls(grid,h, minX, maxX, minY, maxY) {
    if(h){
        if(maxX - minX<2){
            return;
        }
        let y = Math.floor(randomNumber(minY, maxY)/2)*2;
        addHWall(grid,minX,maxX,y);
        addInnerWalls(grid,!h, minX, maxX, minY, y-1);
        addInnerWalls(grid,!h, minX, maxX, y+1, maxY);
    }
    else{
        if(maxY - minY<2){
            return;
        }
        let x = Math.floor(randomNumber(minX, maxX)/2)*2;
        addVWall(grid,minY,maxY,x)
        addInnerWalls(grid,!h, minX, x-1, minY, maxY)
        addInnerWalls(grid,!h, x+1, maxX, minY, maxY)
    }
}

function addHWall(grid,minX, maxX, y) {
    var hole = Math.floor(randomNumber(minX, maxX)/2)*2+1;
    for(let i = minX ; i<=maxX; i++){
        if(i===hole){
            grid[y][i].isWall = false
            if(walls.includes(grid[y][i])){
                let index = walls.indexOf(grid[y][i])
                walls.splice(index,1)
            }
        }else{
            if(!grid[y][i].isStart && !grid[y][i].isEnd){
                grid[y][i].isWall = true
                walls.push(grid[y][i])
            }
        }
    }
}
function addVWall(grid,minY, maxY, x) {
    var hole = Math.floor(randomNumber(minY, maxY)/2)*2+1;
    for(let i = minY ; i<=maxY; i++){
        if(i===hole){
            grid[i][x].isWall = false
            if(walls.includes(grid[i][x])){
                let index = walls.indexOf(grid[i][x])
                walls.splice(index,1)
            }
        }else{
            if(!grid[i][x].isStart && !grid[i][x].isEnd){
                grid[i][x].isWall = true
                walls.push(grid[i][x])
            }
        }
    }
}
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
