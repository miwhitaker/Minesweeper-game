import React, {Component} from 'react'
import './App.css';
import Board from './Components/board'


class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.rtClick = this.rtClick.bind(this)
    const mines = {location1: [1,1], location2: [0,2], location3: [2,4], location4: [4,1], location5: [4,2]}
    const winThing = 
          {isMine: false, 
            isClicked: false, 
            isRtClicked: false, 
            numNearMine: 0,
            displayMode: "initial"    
          }
    const stateArr = []
    const tempArr = []
    for(let i = 0; i < 5; i++) {
      tempArr.push(JSON.parse(JSON.stringify(winThing)))
    }
    for(let j = 0; j < 5; j++) {
      stateArr[j] = JSON.parse(JSON.stringify(tempArr))
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

    stateArr[0][0].numNearMine = 1
    stateArr[0][1].numNearMine = 1
    stateArr[0][3].numNearMine = 1
    stateArr[0][4].numNearMine = 1
    stateArr[3][0].numNearMine = 1
    stateArr[3][2].numNearMine = 1
    stateArr[3][4].numNearMine = 1
    stateArr[4][1].numNearMine = 1
    stateArr[4][3].numNearMine = 1
    stateArr[1][0].numNearMine = 2
    stateArr[1][3].numNearMine = 2
    stateArr[2][1].numNearMine = 2
    stateArr[2][3].numNearMine = 2
    stateArr[3][1].numNearMine = 2
    stateArr[3][3].numNearMine = 2

    this.state = {cells: stateArr}
}   //end of constructor
  
  handleClick(row, col) {
    this.state.cells[row][col].isClicked = true
    this.setState({cells: this.state.cells})
    

    if (this.state.cells[row][col].isClicked === true 
      && this.state.cells[row][col].isMine === true) {
      console.log('GAME OVER')
    }
    
    this.state.cells[row][col].displayMode = 'clicked'
    this.setState({cells: this.state.cells})
    console.log(this.state)

  }   //end of handleClick

  rtClick(row, col) {console.log('rt-clicked on- row:', row, "col: ", col)}
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
      <Board handleClick = {this.handleClick} 
          rtClick = {this.rtClick}/>
      <button className = "restart">Restart</button>
    </div>
    )}
}  //end of game component 




export default App; 
