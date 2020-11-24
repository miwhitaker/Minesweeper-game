import React from 'react';
import Cell from'./cell';


export default function Row(props) {
    let array = []
    let disp = {display: 'flex'}
    for(let i = 0; i < 10; i++) {
      array.push(<Cell
                  key = {i}
                  style = {disp}
                  row = {props.row} 
                  col = {i} 
                  handleClick = {props.handleClick} 
                  rtClick = {props.rtClick}
                  displayMode = {props.displayMode[i]}
                  numMines = {props.numMines[i]} />  )
    }
    
    return (
      <div style = {disp}>
        {array}
      </div> )
  }

  