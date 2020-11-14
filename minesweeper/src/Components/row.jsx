import React from 'react'
import Cell from'./cell'

let count = 100;
function counter(num) {
  count = count + num;
  return count
}
export default function Row(props) {
    let array = []
    let disp = {display: 'flex'}
    for(let i = 0; i < 5; i++) {
      array.push(<Cell key = {counter()} row = {props.row} col = {i} handleClick = {props.handleClick} rtClick = {props.rtClick}/>)
    }
    
    return (
      <div style = {disp}>
        {array}
      </div> )
  }

  //  