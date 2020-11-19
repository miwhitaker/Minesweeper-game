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
          onContextMenu = {(e) => e.preventDefault()}>
            {props.numMines}
        </button>   )
    } 

    else if (props.displayMode === 'empty') {
      return (
        <button 
          key = {counter()}
          className = {props.displayMode}
          onContextMenu = {(e) =>  e.preventDefault()}>
        </button>  )
    }

    else if (props.displayMode === 'rtClicked') {
      return (
        <button 
          key = {counter()}
          className = {props.displayMode}
          onClick = {() => props.handleClick(props.row, props.col)} 
          onContextMenu = {(e) => 
            {props.rtClick(props.row, props.col); 
            e.preventDefault()}} >
                        
        </button>  )
    }

    else if (props.displayMode === 'explosion') {
      return (
        <button 
          key = {counter()}
            className = {props.displayMode} 
            onContextMenu = {(e) => 
              e.preventDefault()} >
                
        </button>  )
    }

    else if (props.displayMode === 'mine') {
      return (
        <button 
          key = {counter()}
            className = {props.displayMode}
            onContextMenu = {(e) =>  
              e.preventDefault()}>
        </button>  )
    }
    
    else if (props.displayMode === 'gameover') {
      return (
        <button 
          key = {counter()}
            className = {props.displayMode} 
            onContextMenu = {(e) => e.preventDefault()}>
        </button> )
    }
  }   //end of function Cell

