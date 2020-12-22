import React from "react";
import Node from "./Node";
import {dijkstra,getPath} from "./Algorithms/dijkstra"
import {AStar} from "./Algorithms/AStar"
import {DFS} from './Algorithms/dfs';
import {BFS,BFS1, Bidirectional} from './Algorithms/bfs';
import {GBS} from './Algorithms/gbs';
import {generateMazeRandomDFS} from './MazeAlgorithms/RandomDFS';
import { recursiveDivision } from "./MazeAlgorithms/RecursiveDivision";
import "./grid.css";

let STARTNODE_i = 10
let STARTNODE_j = 15
let ENDNODE_i = 10
let ENDNODE_j = 35
const WIDTH = 60
const HEIGHT = 30

class Visualizer extends React.Component{
    constructor(){
        super()
        this.state = {
            grid: [],
            mousePressed:false,
            startPicked:false,
            endPicked: false,
            message: "Drag and drop Start and End nodes to change their position. Drag through the grid to create walls",
            showScores: false,
            algoIsRunning: false
        }
    }
    componentDidMount(){
        const grid = getGrid(WIDTH,HEIGHT)
        this.setState({grid: grid})
    }

    //Clears Animated nodes only <- Bugs
    clearAnimation(){
       // const grid = getGrid(WIDTH,HEIGHT)
        for(let i = 0; i<this.state.grid.length; i++){
            for(let j = 0; j < this.state.grid[0].length;j++){
                if(!this.state.grid[i][j].isWall){
                    this.setState({grid: makeNewNode(this.state.grid, i, j)})
                    if(!this.state.grid[i][j].isStart && !this.state.grid[i][j].isEnd){
                        document.getElementById(`node-${i}-${j}`).className = "node";
                        document.getElementById(`node-${i}-${j}`).innerHTML = "";
                    }
                
                }
            }
        } 
    }
    clear(){
        const grid = getGrid(WIDTH,HEIGHT)
        for(let i = 0; i<this.state.grid.length; i++){
            for(let j = 0; j < this.state.grid[0].length;j++){
                if(!this.state.grid[i][j].isStart && !this.state.grid[i][j].isEnd){
                    document.getElementById(`node-${i}-${j}`).className = "node";
                    document.getElementById(`node-${i}-${j}`).innerHTML = "";
                }
            }
        } 
        this.setState({grid: grid,message: "Drag and drop Start and End nodes to change their position. Drag through the grid to create walls"})      
    }
    //----------Clear

    //Mouse Events For Wall, Start and End
    handleMouseDown(i,j){
        const node = this.state.grid[i][j]
        if(!node.isEnd&&!node.isStart){
            const ng = toggleWall(this.state.grid, i, j);
            this.setState({grid:ng, mousePressed : true});
        }
    }
    handleMouseEnter(i,j){
        if(!this.state.mousePressed) return;
        const node = this.state.grid[i][j]
        if(this.state.startPicked){
            if(!node.isWall){
                STARTNODE_i = i
                STARTNODE_j = j
                const ng = makeStart(this.state.grid, i,j)
                this.setState({grid: ng})
            }
        }
        else if(this.state.endPicked){
            if(!node.isWall){
                ENDNODE_i = i
                ENDNODE_j = j
                const ng = makeEnd(this.state.grid, i,j)
                this.setState({grid: ng})
            }
        }
        else{
            if(!this.state.grid[i][j].isStart&&!this.state.grid[i][j].isEnd){
                const ng = toggleWall(this.state.grid, i, j);
                this.setState({grid:ng});
            }
        }
    }
    handleMouseLeave(i,j){
        if(!this.state.mousePressed) return;
        if(this.state.startPicked){
            const ng = removeStart(this.state.grid, i,j)
            this.setState({grid: ng})
        }
        else if(this.state.endPicked){
            const ng = removeEnd(this.state.grid, i,j)
            this.setState({grid: ng})
        }
    }
    handleMouseUp(i,j){
        const node = this.state.grid[i][j]
        if(this.state.startPicked){
            STARTNODE_i = i
            STARTNODE_j = j
            const ng = makeStart(this.state.grid, i,j)
            this.setState({grid: ng, startPicked: false,mousePressed : false})
        }
        else if(this.state.endPicked){
            ENDNODE_i = i
            ENDNODE_j = j
            const ng = makeEnd(this.state.grid, i,j)
            this.setState({grid: ng, endPicked : false,mousePressed : false})
        }
        else{
            if(node.isStart){
                this.setState({startPicked: true,mousePressed : true});
                const ng = removeStart(this.state.grid, i,j)
                this.setState({grid: ng})
            }
            else if(node.isEnd){
                this.setState({endPicked: true,mousePressed : true});
                const ng = removeEnd(this.state.grid, i,j)
                this.setState({grid: ng})
            }
            else{
                this.setState({startPicked: false, endPicked: false,mousePressed : false});
            }
        }
    }

    //------------------ Mouse Events

    //Animation
    animate(path, shortPath, showScore){
        if(path===-1){this.setState({message:"No Solution"});
        return;    
    }
        else{
            for(let i = 0; i <= path.length; i++){
                if (i===path.length){
                    setTimeout(()=>{
                        this.animateShortestPath(shortPath)
                    }, 10*i)
                    return;
                }
            setTimeout(()=>{
                const node = path[i]
                if(!node.isStart && !node.isEnd){
                document.getElementById(`node-${node.row}-${node.col}`).className = "node node-visited";
                if(showScore){
                    document.getElementById(`node-${node.row}-${node.col}`).innerHTML = `<p class = "score">${node.f}</p>`;
                }
                }
                }, 10*i);
            }
    }
    }
    animateShortestPath(path){
        for(let i = 0; i < path.length; i++){
            setTimeout(()=>{
                const node = path[i]
                if(!node.isStart && !node.isEnd){
                document.getElementById(`node-${node.row}-${node.col}`).className = "node node-shortest";
                }
                }, 10*i);
            }
            this.setState({message:"Found the shortest path."})
            setTimeout(()=>{
                this.setState({message:"Clear the grid"})
            }, 3000)
            
    }
    //--------animation

    // Dijkstra
    visualizeDijkstra(showScore){
        this.setState({message:"Searching...", algoIsRunning:true})
        const grid = this.state.grid
        const startNode = grid[STARTNODE_i][STARTNODE_j]
        const endNode = grid[ENDNODE_i][ENDNODE_j]
        const path = dijkstra(grid,startNode, endNode)
        const shortestPath = getPath(endNode)
        this.animate(path, shortestPath, showScore);
    }
    //-----dijkstra
    // A*
    visualizeAStar(showScore){
        this.setState({message:"Searching...", algoIsRunning:true})
        const grid = this.state.grid
        const startNode = grid[STARTNODE_i][STARTNODE_j]
        const endNode = grid[ENDNODE_i][ENDNODE_j]
        const path = AStar(grid,startNode, endNode)
        const shortestPath = getPath(endNode);
        this.animate(path, shortestPath, showScore);
    }
    //------a*
    //DFS
    visualizeDFS(){
        this.setState({message:"Searching...", algoIsRunning:true})
        const grid = this.state.grid
        const startNode = grid[STARTNODE_i][STARTNODE_j]
        const endNode = grid[ENDNODE_i][ENDNODE_j]
        const path = DFS(grid,startNode, endNode)
        const shortestPath = getPath(endNode);
        this.animate(path, shortestPath, false);
    }
    //-------DFS
    //BFS
    visualizeBFS(){
        this.setState({message:"Searching...", algoIsRunning:true})
        const grid = this.state.grid
        const startNode = grid[STARTNODE_i][STARTNODE_j]
        const endNode = grid[ENDNODE_i][ENDNODE_j]
        const path = BFS(grid,startNode, endNode)
        const shortestPath = getPath(endNode);
        this.animate(path, shortestPath, false);
    }
    //------BFS
    //Greedy first search
    visualizeGBS(showScore){
        this.setState({message:"Searching...", algoIsRunning:true})
        const grid = this.state.grid
        const startNode = grid[STARTNODE_i][STARTNODE_j]
        const endNode = grid[ENDNODE_i][ENDNODE_j]
        const path = GBS(grid,startNode, endNode)
        const shortestPath = getPath(endNode);
        this.animate(path,shortestPath, showScore)
    }

    animateBidirectional(path1,path2, shortestPath1, shortestPath2){

            for(let i = 0; i <= path1.length; i++){
                if (i===path1.length){
                    setTimeout(()=>{
                        this.animateShortestPath(shortestPath1)
                        this.animateShortestPath(shortestPath2)
                    }, 10*i)
                    return;
                }
            setTimeout(()=>{
                const node1 = path1[i]
                const node2 = path2[i]
                    if(node1 && node2){
                        if(!node1.isStart && !node1.isEnd && !node2.isStart && !node2.isEnd){
                            document.getElementById(`node-${node1.row}-${node1.col}`).className = "node node-visited";
                            document.getElementById(`node-${node2.row}-${node2.col}`).className = "node node-visited";
                    }
            }
                }, 10*i);
            }
    }
    visualizeBidirectional(){
    //     this.setState({message:"Searching...", algoIsRunning:true})
    //     let grid = this.state.grid
    //     const startNode = grid[STARTNODE_i][STARTNODE_j]
    //     const endNode = grid[ENDNODE_i][ENDNODE_j]
    //     const path1 = BFS1(grid,startNode)
    //     grid = getGrid(WIDTH,HEIGHT)
    //     const path2 = BFS1(grid, endNode)
    //     let intersection1 = null
    //     let intersection2 = null
    //     let found = false
    //     let p = 0
    //     let q = 0
    //     while(!found&&p<path1.length&&path2.length>q){
    //         let i = path1[p]
    //         let j = path2[q]
    //         if(i.col === j.col && i.row === j.row){
    //             intersection1 = i
    //             intersection2 = j
    //             found = true
    //         }
    //         p++;
    //         q++;
    //     }
    //     // for(let p = path1.length-1; p>=0; p--){
    //     //     let i = path1[p]
    //     //     for(let q = path2.length-1; q>=0; q--){
    //     //         let j = path2[q]
    //     //         if(i.col === j.col && i.row === j.row){
    //     //             intersection1 = i
    //     //             intersection2 = j
    //     //             found = true
    //     //             break
    //     //         }
    //     //     }
    //     //     if(found){
    //     //         break
    //     //     }
    //     // }
    //     if(found){
    //         const shortest1 = getPath(intersection1)
    //         const shortest2 = getPath(intersection2)
    //         const p1 = path1.splice(0,path1.indexOf(intersection1)+1)
    //         const p2 = path2.splice(0,path2.indexOf(intersection2)+1)
    //         console.log(p1,p2)
    //         this.animateBidirectional(p1,p2,shortest1,shortest2)
    //     }

    return;
        
    }
    visualizeRandomDFSMaze(){
        this.setState({algoIsRunning:true})
        this.clear()
        const grid = this.state.grid
        const startNode = grid[STARTNODE_i][STARTNODE_j]
        const endNode = grid[ENDNODE_i][ENDNODE_j]
        const walls = generateMazeRandomDFS(grid, startNode, endNode)
        this.animateWalls(walls)
    }
    visualizeRecursiveDivision(){
        this.setState({algoIsRunning:true})
        this.clear()
        const grid = this.state.grid
        const startNode = grid[STARTNODE_i][STARTNODE_j]
        const endNode = grid[ENDNODE_i][ENDNODE_j]
        const walls = recursiveDivision(grid, startNode, endNode)
        this.animateWalls(walls)
    }
    animateWalls(walls){
        for(let i = 0; i<=walls.length;i++){  
            if(i===walls.length){
                setTimeout(()=>{
                    const ng = makeWalls(this.state.grid,walls)
                    this.setState({grid:ng})
                },10*i)
                return; 
            }
            setTimeout(()=>{
                if(walls[i]){
                document.getElementById(`node-${walls[i].row}-${walls[i].col}`).className = "node node-wall";
                }
                },10*i)
    }
    }
    render(){
        const nodes = this.state.grid
        return (<div className = "main">
        <h6>{this.state.message}</h6>
            <table className = "grid">
            <tbody>
            {nodes.map((row, rowId) => {
                return <tr className = "row" key = {rowId}>
                        {row.map((cell, cellId)=>{
                            const {row, col, isEnd, isStart, isWall, isVisited} = cell;
                            return <Node
                                key = {cellId}
                                col = {col}
                                row = {row}
                                isStart = {isStart}
                                isEnd = {isEnd}
                                isWall = {isWall}
                                isVisited = {isVisited}
                                onMouseDown = {(row,col)=>this.handleMouseDown(row,col)}
                                onMouseEnter = {(row,col)=>this.handleMouseEnter(row,col)}
                                onMouseUp = {(row,col)=>this.handleMouseUp(row,col)}
                                onMouseLeave = {(row, col)=>this.handleMouseLeave(row,col)}>
                                </Node>})}</tr>
                        })}
            </tbody>
        </table>
        </div>
        )
    }
}

// Helper Functions
function getGrid(width, height) {
    const grid = []
    for(let i = 0; i<height; i++){
        const row = []
        for(let j = 0; j <width; j++){ 
            row.push(newNode(i,j))
           }
            grid.push(row)
    }
    return grid
 }

 function newNode(i,j) {
     return{
         row: i,
         col: j,
         isStart: i === STARTNODE_i && j === STARTNODE_j,
         isEnd: i === ENDNODE_i && j === ENDNODE_j,
         distance: Infinity,
         previous: null,
         isVisited: false,
         isWall: false,
         h:0,
         g:0,
         f:0
     }
 }
 
function makeNewNode(grid,i,j){
    const ng = grid.slice();
    const node = newNode(i,j);
    ng[i][j] = node
    return ng
}

function toggleWall(grid, i, j){
    const ng = grid.slice();
    const node = ng[i][j];
    
    const n = {
        ...node,
        isWall: !node.isWall,
    }
    ng[i][j] = n
    return ng

}
function makeWalls(grid, walls){
    const ng = grid.slice();
        for(let w of walls){
            const i = w.row
            const j = w.col
            ng[i][j] = w;
        }
    return ng

}

function makeStart(grid, i,j) {
    const ng = grid.slice();
    const node = ng[i][j];
    
    const n = {
        ...node,
        isStart: true,
        isWall: false
    }
    ng[i][j] = n
    return ng
}
function removeStart(grid,i,j) {
    const ng = grid.slice();
    const node = ng[i][j];
    
    const n = {
        ...node,
        isStart: false,
    }
    ng[i][j] = n
    return ng
}
function makeEnd(grid, i,j) {
    const ng = grid.slice();
    const node = ng[i][j];
    
    const n = {
        ...node,
        isEnd: true,
        isWall: false
    }
    ng[i][j] = n
    return ng
}
function removeEnd(grid,i,j) {
    const ng = grid.slice();
    const node = ng[i][j];
    
    const n = {
        ...node,
        isEnd: false,
    }
    ng[i][j] = n
    return ng
}

export default Visualizer