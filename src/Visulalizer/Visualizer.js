import React from "react";
import Node from "./Node";
import {dijkstra,getPath} from "./Algorithms/dijkstra"
import {AStar} from "./Algorithms/AStar"
import {DFS} from './Algorithms/dfs';
import {BFS, Bidirectional} from './Algorithms/bfs';
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
        for(let i = 0; i<this.state.grid.length; i++){
            for(let j = 0; j < this.state.grid[0].length;j++){
            if(!this.state.grid[i][j].isStart && !this.state.grid[i][j].isEnd && !this.state.grid[i][j].isWall){
                document.getElementById(`node-${i}-${j}`).className = "node";
            }
            }
        } 
    }
    clear(){
        const grid = getGrid(WIDTH,HEIGHT)
        this.setState({ grid: grid });
        for(let i = 0; i<this.state.grid.length; i++){
            for(let j = 0; j < this.state.grid[0].length;j++){
            if(this.state.grid[i][j].isStart){            
                document.getElementById(`node-${i}-${j}`).className = "node node-start";}
            if(this.state.grid[i][j].isEnd){            
                document.getElementById(`node-${i}-${j}`).className = "node node-end";}
            if(!this.state.grid[i][j].isStart && !this.state.grid[i][j].isEnd){
                document.getElementById(`node-${i}-${j}`).className = "node";
                document.getElementById(`node-${i}-${j}`).innerHTML = "";
            }
            }
            this.setState({message: "Drag and drop Start and End nodes to change their position. Drag through the grid to create walls"})
        } 
          
    }
    //----------Clear

    //Mouse Events For Wall, Start and End
    handleMouseDown(i,j){
        const node = this.state.grid[i][j]
        if(node.isStart){
            const ng = removeStart(this.state.grid, i,j)
            this.setState({mousePressed:true, startPicked: true, grid: ng})
            
        }
        else if(node.isEnd){
            const ng = removeEnd(this.state.grid, i,j)
            this.setState({mousePressed:true, endPicked: true, grid: ng})
        }
        else{
            const ng = toggleWall(this.state.grid, i, j);
            this.setState({grid:ng, mousePressed : true});
        }
    }
    handleMouseEnter(i,j){
        if(!this.state.mousePressed) return;
        if(this.state.startPicked){
            STARTNODE_i = i
            STARTNODE_j = j
            const ng = makeStart(this.state.grid, i,j)
            this.setState({grid: ng})
        }
        else if(this.state.endPicked){
            ENDNODE_i = i
            ENDNODE_j = j
            const ng = makeEnd(this.state.grid, i,j)
            this.setState({grid: ng})
        }
        else{
        const ng = toggleWall(this.state.grid, i, j);
        this.setState({grid:ng});
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
    handleMouseUp(){
        this.setState({startPicked: false, endPicked: false,mousePressed : false});
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

//     animateBidirectional(path, shortestPath1, shortestPath2){
//             for(let i = 0; i <= path[0].length; i++){
//                 // if (i===path.length){
//                 //     setTimeout(()=>{
//                 //         this.animateShortestPath(shortestPath1)
//                 //     }, 10*i)
//                 //     return;
//                 // }
//             setTimeout(()=>{
//                 const node1 = path[0][i]
//                 const node2 = path[1][i]
//                     if(node1 && node2){
//                         if(!node1.isStart && !node1.isEnd && !node2.isStart && !node2.isEnd){
//                             document.getElementById(`node-${node1.row}-${node1.col}`).className = "node node-visited";
//                             document.getElementById(`node-${node2.row}-${node2.col}`).className = "node node-visited";
//                     }
//             }
//                 }, 10*i);
//             }
// }
    // visualizeBidirectional(){
    //     this.setState({message:"Searching...", algoIsRunning:true})
    //     const grid = this.state.grid
    //     const startNode = grid[STARTNODE_i][STARTNODE_j]
    //     const endNode = grid[ENDNODE_i][ENDNODE_j]
    //     const path = Bidirectional(grid,startNode, endNode)
    //     if(path===-1){
    //         this.setState({message:"No Solution"});
    //         return; 
    //     }
    //     //console.log(path)
    //     // const shortestPath1 = getPath(path[2][0])
    //     // const shortestPath2 = getPath(path[2][1])
    //     //this.animateBidirectional(path, shortestPath1, shortestPath2)
    // }
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
                                onMouseUp = {()=>this.handleMouseUp()}
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
 
function toggleVisited(grid,i,j){
    const ng = grid.slice();
    const node = ng[i][j];
    
    const n = {
        ...node,
        isVisited: !node.isVisited,
    }
    ng[i][j] = n
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