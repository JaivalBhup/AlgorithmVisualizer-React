import React from "react";
import Node from "./Node";
import {dijkstra,getPath} from "./Algorithms/dijkstra"
import {AStar} from "./Algorithms/AStar"
import {DFS} from './Algorithms/dfs';
import {BFS} from './Algorithms/bfs';
import {GBS} from './Algorithms/gbs';
import "./grid.css";

let STARTNODE_i = 10
let STARTNODE_j = 15
let ENDNODE_i = 10
let ENDNODE_j = 35

class Visualizer extends React.Component{
    constructor(){
        super()
        this.state = {
            grid: [],
            mousePressed:false,
            startPicked:false,
            endPicked: false,
            message: "Drag and drop Start and End nodes to change their position. Drag through the grid to create walls",
            showScores: false
        }
    }
    componentDidMount(){
        const grid = getGrid(50,30)
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
        const grid = getGrid(50,30)
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
        this.setState({message:"Searching..."})
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
        this.setState({message:"Searching..."})
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
        this.setState({message:"Searching..."})
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
        this.setState({message:"Searching..."})
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
        console.log("GBS")
        this.setState({message:"Searching..."})
        const grid = this.state.grid
        const startNode = grid[STARTNODE_i][STARTNODE_j]
        const endNode = grid[ENDNODE_i][ENDNODE_j]
        const path = GBS(grid,startNode, endNode)
        const shortestPath = getPath(endNode);
        this.animate(path,shortestPath, showScore)
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