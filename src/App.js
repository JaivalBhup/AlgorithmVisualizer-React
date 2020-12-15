import React from "react";
import Visulalizer from "./Visulalizer/Visualizer";
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentAlgo: "Dijkstra",
      algoTypeWeighted:true,
      showScores:false
    }
    this.child = React.createRef()
  }
  changeShowScores(){
    this.setState(prevState=>{
      return {
        showScores: !prevState.showScores
      }
    })
  }
  chageAlgo(a){
    this.setState({currentAlgo:a})
    setTimeout(()=>{
    console.log(this.state.currentAlgo)
    const algo = this.state.currentAlgo
    if(algo === "Dijkstra"){
      this.setState({algoTypeWeighted:true})
    }
    if(algo === "A*"){
      this.setState({algoTypeWeighted:true})
        }
    if(algo === "DFS"){
      this.setState({algoTypeWeighted:false})
        }
    if(algo === "BFS"){
      this.setState({algoTypeWeighted:false})
        }
    if(algo === "GBS"){
      this.setState({algoTypeWeighted:true})
        }
    if(algo === "Bidirectional"){
      this.setState({algoTypeWeighted:false})
        }
    },100)
  }
  clear(e){
    e.preventDefault()
    this.child.current.clear(e)
  }
  // clearPath(e){
  //   e.preventDefault()
  //   this.child.current.clearAnimation(e)
  // }
  Visualize(e, showScore){
    e.preventDefault()
    const algo = this.state.currentAlgo
    console.log(algo)
    if(algo === "Dijkstra"){
      this.child.current.visualizeDijkstra(showScore)
    }
    if(algo === "A*"){
      this.child.current.visualizeAStar(showScore)
    }
    if(algo === "DFS"){
      this.child.current.visualizeDFS()
    }
    if(algo === "BFS"){
      this.child.current.visualizeBFS()
    }
    if(algo === "GBS"){
      this.child.current.visualizeGBS(showScore)
    }
    // if(algo === "Bidirectional"){
    //   this.child.current.visualizeBidirectional()
    //     }
  }
  createMaze(maze){
    if(maze === "RDFS"){
      this.child.current.visualizeRandomDFSMaze()
    }
    if(maze === "RDM"){
      this.child.current.visualizeRecursiveDivision()
    }
  }
  render(){
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src="./logo.png" width="30" height="30" style = {{marginRight:"10px"}} alt=""></img>
      <a className="navbar-brand" href="https://github.com/JaivalBhup/AlgorithmVisualizer-React">GitHub Repo</a>
      {/* <a className="navbar-brand" href="#">Algorithm Visualizer</a> */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
      {/* <li className="nav-item active">
      <a className="nav-link" href="https://github.com/JaivalBhup/AlgorithmVisualizer-React">GitHub Repo</a>
      </li> */}
      
      {/* <li className="nav-item">
        <a className="nav-link" href="https://github.com/JaivalBhup/AlgorithmVisualizer-React">GitHub Repo</a>
      </li> */}
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {this.state.currentAlgo}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" onClick={()=>this.chageAlgo("Dijkstra")}>Dijkstra</a>
          <a className="dropdown-item" onClick={()=>this.chageAlgo("A*")}>A*</a>
          <a className="dropdown-item" onClick={()=>this.chageAlgo("GBS")}>Greedy Best Search</a>
          <div className="dropdown-divider">Unweighted</div>
          <a className="dropdown-item" onClick={()=>this.chageAlgo("BFS")}>Breadth First Search</a>
          <a className="dropdown-item" onClick={()=>this.chageAlgo("Bidirectional")}>Bidirectional</a>
          <a className="dropdown-item" onClick={()=>this.chageAlgo("DFS")}>Depth First Search</a> 
        </div>
        
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Create Maze
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" onClick={()=>this.createMaze("RDFS")}>Random Depth First Search</a>
          <a className="dropdown-item" onClick={()=>this.createMaze("RDM")}>Recursive Division</a>
        </div>  
      </li>
      <li className = "nav-item">
      <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div style= {{marginTop:"7px", marginRight:"3px",marginLeft:"4px",fontSize:"15px"}}>Show Scores</div>
      <div className="btn-group btn-group-sm" role="group" aria-label="First group">
      <button 
        type="button" 
        className={this.state.showScores ? "btn btn-success" : "btn btn-secondary"}
        onClick={()=>this.changeShowScores()}
        disabled = {this.state.algoTypeWeighted && !this.state.showScores ? false : true}>
        Yes</button>
      <button 
        type="button" 
        className={this.state.showScores ? "btn btn-secondary" : "btn btn-success"}
        onClick={()=>this.changeShowScores()}
        disabled = {this.state.algoTypeWeighted && this.state.showScores ? false : true}>
        No</button>
    </div>
    
  </div>
      
      </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
      {/* <button style={{marginRight: "10px"}} className="btn btn-danger my-2 my-sm-0" onClick= {(e)=>this.clearPath(e)}>Clear Path</button> */}
      <button style={{marginRight: "10px"}} className="btn btn-danger my-2 my-sm-0" onClick= {(e)=>this.clear(e)}>Clear Grid</button>
      <button className="btn btn-primary sm" onClick= {(e)=>this.Visualize(e, this.state.showScores)}>Visualize {this.state.currentAlgo}</button>
      </form>
      </div>
      </nav>
      <Visulalizer
      ref = {this.child} 
      currentAlgo = {this.state.currentAlgo}
      ></Visulalizer>
    </div>
  );
  }
}

export default App;
