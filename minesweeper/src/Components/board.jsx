import React from 'react';
import Row from './row';

export default function Board(props) {
  let array = []
  for(let j = 0; j < 5; j++) {
      array.push(<Row row = {j} col = {props.col} handleClick = {props.handleClick} rtClick = {props.rtClick}/>)
    }
    return (
      <div>
        {array}
      </div>)
}

//  