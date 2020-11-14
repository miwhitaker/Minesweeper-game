import React from 'react';

export default function Cell(props) {
    let style = {
      height: 25,
      width: 25,
      border: '1px solid black',
      backgroundColor: 'red'
    }
    return (
      <button style = {style} onClick = {() => props.handleClick(props.row, props.col)} onContextMenu = {(e) => props.rtClick(props.row, props.col); e.preventDefault()}></button>
  }

