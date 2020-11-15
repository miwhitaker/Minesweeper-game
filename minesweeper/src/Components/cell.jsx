import React from 'react';

let count = 10;
function key() {
  count = count + 1;
  return count;
}
export default function Cell(props) {
    let style = {
      height: 25,
      width: 25,
      border: '1px solid black',
      backgroundColor: 'red'
    }
    return (
      <button 
        key = {key()}
        style = {style} 
        onClick = {() => props.handleClick(props.row, props.col)} 
        onContextMenu = {(e) => 
          {props.rtClick(props.row, props.col); 
          e.preventDefault()}}>

      </button> )
  }

