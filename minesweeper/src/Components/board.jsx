import React from 'react';
import Row from './row';


export default function Board(props) {
  let array = []
  for(let j = 0; j < 5; j++) {
      array.push(<Row key = {j}
                    row = {j} 
                    handleClick = {props.handleClick} 
                    rtClick = {props.rtClick}
                    displayMode = {props.displayMode[j]}
                    numMines = {props.numMines[j]} />  )
    }
    return (
      <div>
        {array}
      </div>  )
}

//  