import React from "react";
import Visulalizer from "./Visulalizer/Visualizer";
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentAlgo: "Dijkstra"
    }
    this.child = React.createRef()
  }
  chageAlgo(a){
    this.setState({currentAlgo:a})
  }
  clear(e){
    e.preventDefault()
    this.child.current.clear(e)
  }
  Visualize(e){
    e.preventDefault()
    const algo = this.state.currentAlgo
    console.log(algo)
    if(algo === "Dijkstra"){
      this.child.current.visualizeDijkstra()
    }
    if(algo === "A*"){
      this.child.current.visualizeAStar()
    }
  }
  render(){
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src="./logo.png" width="30" height="30" style = {{marginRight:"10px"}} alt=""></img>
      <a className="navbar-brand" href="#">Algorithm Visualizer</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="https://github.com/JaivalBhup/AlgorithmVisualizer-React">GitHub Repo<span className="sr-only">(current)</span></a>
      </li>
      {/*
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li> */}
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {this.state.currentAlgo}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <button className="dropdown-item" onClick={(e)=>this.chageAlgo("Dijkstra")}>Dijkstra</button>
          <a className="dropdown-item" onClick={(e)=>this.chageAlgo("A*")}>A*</a>
          {/* <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a> */}
        </div>
      </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
      <button style={{marginRight: "10px"}} className="btn btn-danger my-2 my-sm-0" onClick= {(e)=>this.clear(e)}>Clear Grid</button>
      <button className="btn btn-outline-success my-2 my-sm-0" onClick= {(e)=>this.Visualize(e)}>Visualize {this.state.currentAlgo}</button>
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
