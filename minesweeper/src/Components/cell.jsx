import React from 'react';
import './cells.css';


let count = 100;
function counter() {
  count = count + 1;
  return count
}

export default function Cell(props) {

    if (props.displayMode === 'initial') {
      return (
        <button 
          key = {counter()}
          className = {props.displayMode}
          onClick = {() => props.handleClick(props.row, props.col)} 
          onContextMenu = {(e) => 
            {props.rtClick(props.row, props.col); 
            e.preventDefault()}} >
      </button> )
    }

    else if (props.displayMode === 'clicked') {
      return (
        <button 
          key = {counter()}
          className = {props.displayMode}
          onClick = {() => props.handleClick(props.row, props.col)} 
          onContextMenu = {(e) => 
            {props.rtClick(props.row, props.col); 
            e.preventDefault()}} >
            {props.numMines}
      </button>
      )
    } 
  }

