import React, {Component} from 'react'
import './App.css';

function Cell(props) {
  let style = {
    height: 25,
    width: 25,
    border: '1px solid black',
    backgroundColor: 'red'
  }
  return (
    <button style = {style}></button>)
}

function Row(props) {
  let array = []
  let disp = {display: 'flex'}
  for(let i = 0; i < 5; i++) {
    array.push(<Cell />)
  }
  return (
    <div style = {disp}>
      {array}
    </div> )
}

function Board(props) {
  let array = []
  for(let j = 0; j < 5; j++) {
    array.push(<Row />)
  }
  return (
    <div>
      {array}
    </div>)
}
    
class App extends Component {
  constructor(props) {
    super(props)
    const mines = {location1: [1,1], location2: [0,2], location3: [2,4], location4: [4,1], location5: [4,2]}
    const winThing = 
          {isMine: false, 
           values: {isClicked: false,
                    isRtClicked: false,
                    numNearMine: 0        
          }}
    const stateArr = []
    const tempArr = []
    for(let i = 0; i < 5; i++) {
      tempArr.push(JSON.parse(JSON.stringify(winThing)))
    }
    for(let j = 0; j < 5; j++) {
      stateArr[j] = JSON.parse(JSON.stringify((tempArr)))
    }
    //modify this to loop through const mines (location of mines) and change isMine to true
    //hmm...need to extract values [i,j] one at a time and do stateArr[i][j].isMine = true
    //locateMine() function
    
    stateArr[1][1].isMine = true
    stateArr[0][2].isMine = true
    stateArr[2][4].isMine = true
    stateArr[4][1].isMine = true
    stateArr[4][2].isMine = true
    
    //populate numNearMines 
    //populateNum() function
    //stateArr[i-1][j-1].values.numNearMines = stateArr[i-1][j-1].values.numNearMines + 1
    //stateArr[i-1][j].values.numNearMines = stateArr[i-1][j].values.numNearMines + 1
    //stateArr[i-1][j+1].values.numNearMines = stateArr[i-1][j+1].values.numNearMines + 1
    //stateArr[i][j-1].values.numNearMines = stateArr[i][j-1].values.numNearMines + 1
    //stateArr[i][j+1].values.numNearMines = stateArr[i][j+1].values.numNearMines + 1
    //stateArr[i+1][j-1].values.numNearMines = stateArr[i+1][j-1].values.numNearMines + 1
    //stateArr[i+1][j].values.numNearMines = stateArr[i+1][j].values.numNearMines + 1
    //stateArr[i+1][j+1].values.numNearMines = stateArr[i+1][j+1].values.numNearMines + 1

    stateArr[0][0].values.numNearMine = 1
    stateArr[0][1].values.numNearMine = 1
    stateArr[0][3].values.numNearMine = 1
    stateArr[0][4].values.numNearMine = 1
    stateArr[3][0].values.numNearMine = 1
    stateArr[3][2].values.numNearMine = 1
    stateArr[3][4].values.numNearMine = 1
    stateArr[4][1].values.numNearMine = 1
    stateArr[4][3].values.numNearMine = 1
    stateArr[1][0].values.numNearMine = 2
    stateArr[1][3].values.numNearMine = 2
    stateArr[2][1].values.numNearMine = 2
    stateArr[2][3].values.numNearMine = 2
    stateArr[3][1].values.numNearMine = 2
    stateArr[3][3].values.numNearMine = 2

}   //end of constructor
  
  handleClick() {}
  render() {
    return(
    <div>
      <div className = "gameHeader">
        <div className = "scoreCount">
          <span>Mines: </span>
          <span>5</span>
        </div>
        <div className = "scoreCount">
          <span>Marked: </span>
          <span>0</span>
        </div>
      </div>
      <Board ></Board>
      <button className = "restart">Restart</button>
    </div>
    )}
}  //end of game component 



/*function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>
    </div>
  );
}
*/
export default App; 
