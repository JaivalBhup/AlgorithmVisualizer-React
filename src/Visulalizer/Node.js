import React from "react"
import "./Node.css"

export default class Node extends React.Component{
    render(){
        const {isEnd, isStart, col, row, isWall, onMouseDown, onMouseEnter, onMouseUp, onMouseLeave} = this.props
        const addedClass = isStart ? "node-start" : isEnd ? "node-end" :isWall ? 'node-wall' : '';
        return <td id = {`node-${row}-${col}`}
                    className = {`node ${addedClass}`}
                    onMouseDown = {()=>onMouseDown(row,col)}
                    onMouseEnter = {() => onMouseEnter(row,col)}
                    onMouseUp = {()=>onMouseUp(row,col)}
                    onMouseLeave = {()=>onMouseLeave(row,col)}
                    ></td>
    }
}

export const DEFAULT_NODE = {
    row: 0,
    col: 0,
};