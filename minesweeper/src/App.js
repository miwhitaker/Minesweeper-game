import React, {Component} from 'react';
import './App.css';
import Board from './Components/board';



//max is (# of rows/columns - 1), x=row, y=col
function findNeighbors(x, y, max) {
  if (x === 0 && y === 0) {
    return [[0, 1], [1, 0], [1, 1]];
  }
  else if (x === max && y === 0) {
    return [[x-1, 0], [x-1, y+1], [x, y+1]];
  }
  else if (x === 0 && y === max) {
    return [[0, y-1], [x+1, y-1], [x+1, y]];
  }
  else if (x === max && y === max) {
    return [[x-1, y], [x-1, y-1], [x, y-1]];
  }
  else if (x === 0) {
    return [[0, y-1], [0, y+1], [1, y-1], [1, y], [1, y+1]];
  }
  else if (y === 0) {
    return [[x+1, 0], [x-1, 0], [x-1, 1], [x, 1], [x+1, 1]];
  }
  else if (x === max) {
    return [[x, y-1], [x, y+1], [x-1, y-1], [x-1, y], [x-1, y+1]];
  }
  else if (y === max) {
    return [[x-1, y], [x+1, y], [x-1, y-1], [x, y-1], [x+1, y-1]];
  }
  else {
    return [[x-1, y-1], [x-1, y], [x-1, y+1], [x, y-1], [x, y+1], [x+1, y-1], [x+1, y], [x+1, y+1]];
  }
}

function randomNumber(max) {
  let randArr = []
  while(randArr.length < max) {
    const x = Math.floor(Math.random()* max) ;
    const y = Math.floor(Math.random()* max) ;
    const check = [x, y]
    randArr.push([x, y])
    for(i = 0; i <= (randArr.length - 2); i++) {
      if(randArr[i] === check) 
        {randArr.pop()}
    }
  }
  console.log(randArr)
  return randArr
}

class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.rtClick = this.rtClick.bind(this)
    
    const winThing = 
          {isMine: false, 
            isClicked: false, 
             isRtClicked: false}

    const numNearMine = []
    const dummy = []
    const thing = []
    const mode = []
    const stateArr = []
    const tempArr = []

    for(let i = 0; i < 5; i++) {
      tempArr.push(JSON.parse(JSON.stringify(winThing)));
      thing.push(JSON.parse(JSON.stringify('initial')));
      dummy.push(0)
    }

    for(let j = 0; j < 5; j++) {
      stateArr[j] = JSON.parse(JSON.stringify(tempArr));
      mode[j] = JSON.parse(JSON.stringify(thing));
      numNearMine[j] = JSON.parse(JSON.stringify(dummy))
    }
    
    const mines = randomNumber(5)
    for (let k = 0; k < mines.length; k++) {
      const val1 = mines[k][0];
      const val2 = mines[k][1];
      stateArr[val1][val2].isMine = true
      
    }
    
    for (let q = 0; q < mines.length; q++) {
      const val1 = mines[q][0];
      const val2 = mines[q][1];
      const values = findNeighbors(val1, val2, 4)
      for (let t = 0; t < values.length; t++) {
        const a = values[t][0];
        const b = values[t][1];
        if (stateArr[a][b].isMine === false) {
          numNearMine[a][b] += 1
        }
      }
    }

    this.state = {cells: stateArr, 
                  mode: mode, 
                  numMines: numNearMine, 
                  minesTagged: 0,
                  winState: 0}
    
}   //end of constructor
  
  handleClick(row, col) {
    if (this.state.cells[row][col].isRtClicked === true)
      {return}
      // eslint-disable-next-line
    else {this.state.cells[row][col].isClicked = true}

    if (this.state.cells[row][col].isClicked === true 
      && this.state.cells[row][col].isMine === true) {
        // eslint-disable-next-line
      this.state.mode[row][col] = 'explosion'
      this.setState({cells: this.state.cells, mode: this.state.mode})
      this.youLost()
    }
    else if (this.state.cells[row][col].isMine === false 
      && this.state.numMines[row][col] === 0) {
        // eslint-disable-next-line
        this.state.mode[row][col] = 'empty'
    }
    // eslint-disable-next-line
    else {this.state.mode[row][col] = 'clicked'}

    this.setState({cells: this.state.cells, mode: this.state.mode})
    
    if (this.state.mode[row][col] === 'empty') {
      const values = findNeighbors(row, col, 4)
      for (let num = 0; num < values.length; num++) {
        const val1 = values[num][0]
        const val2 = values[num][1]
        // eslint-disable-next-line
        this.state.cells[val1][val2].isClicked = true
        if(this.state.numMines[val1][val2] === 0) {
          // eslint-disable-next-line
          this.state.mode[val1][val2] = 'empty'
        }
        // eslint-disable-next-line
        else {this.state.mode[val1][val2] = 'clicked'}
      }
    }

    this.setState({cells: this.state.cells, mode: this.state.mode})
    if (this.victoryConditions() === true) {
      this.setState({winState: 1})
    } 


  }   //end of handleClick

  rtClick(row, col) {
    if (this.state.cells[row][col].isClicked === true) 
      {return}
    else {
      // eslint-disable-next-line
      this.state.cells[row][col].isRtClicked = !this.state.cells[row][col].isRtClicked
      }

    if (this.state.cells[row][col].isRtClicked === true) {
      // eslint-disable-next-line
      this.state.mode[row][col] = 'rtClicked'
      // eslint-disable-next-line
      this.state.minesTagged = this.state.minesTagged + 1
    }
    else {
      // eslint-disable-next-line
      this.state.mode[row][col] = 'initial'
      // eslint-disable-next-line
      this.state.minesTagged = this.state.minesTagged - 1
    }

    this.setState({cells: this.state.cells, 
                    mode: this.state.mode, 
                    minesTagged: this.state.minesTagged})
    
    
  }   //end of rtClick

  victoryConditions() {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if(this.state.cells[i][j].isMine === false 
        && this.state.cells[i][j].isClicked ===false) 
          {return false}
      }
    } 
    return true
  }   //end of victory conditions

  youLost() {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if(this.state.cells[i][j].isMine === true 
          && this.state.cells[i][j].isClicked === false) {
            // eslint-disable-next-line
            this.state.mode[i][j] = 'mine'
          }
        else if (this.state.mode[i][j] === 'initial') {
          // eslint-disable-next-line
          this.state.mode[i][j] = 'gameover'
          }
      }
    }
    this.setState({cells: this.state.cells, mode: this.state.mode, winState: 2})
  }

  restart() {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        // eslint-disable-next-line
        this.state.cells[i][j].isMine = false 
        // eslint-disable-next-line
        this.state.cells[i][j].isClicked = false
        // eslint-disable-next-line
        this.state.cells[i][j].isRtClicked = false
        // eslint-disable-next-line
        this.state.mode[i][j] = 'initial'
        // eslint-disable-next-line
        this.state.numMines[i][j] = 0
      }
    }
    this.setState({
      cells: this.state.cells,
      mode: this.state.mode,
      numMines: this.state.numMines, 
      minesTagged: 0,
      winState: 0
    })

    const mines = randomNumber(5)
    for (let k = 0; k < mines.length; k++) {
      const val1 = mines[k][0];
      const val2 = mines[k][1];
      // eslint-disable-next-line
      this.state.cells[val1][val2].isMine = true
    }
    
    for (let q = 0; q < mines.length; q++) {
      const val1 = mines[q][0];
      const val2 = mines[q][1];
      const values = findNeighbors(val1, val2, 4)
      for (let t = 0; t < values.length; t++) {
        const a = values[t][0];
        const b = values[t][1];
        if (this.state.cells[a][b].isMine === false) {
          // eslint-disable-next-line
          this.state.numMines[a][b] += 1
        }
      }
    }
    this.setState({
      cells: this.state.cells,
      mode: this.state.mode,
      numMines: this.state.numMines
    })
  }   //end of restart method

  render() {
    return(
      <div className = "gameContainer">
        <div className = "gameHeader">
          <div className = "scoreCount">
            <span>Mines
              <span className = "numDisplay">5</span>
            </span>
            
          </div>
          <div className = "scoreCount">
            <span>Mines Tagged:
              <span className = "numDisplay">{this.state.minesTagged}</span>
            </span>
            
          </div>
        </div>
        <Board handleClick = {this.handleClick} 
            rtClick = {this.rtClick}
            displayMode = {this.state.mode}
            numMines = {this.state.numMines} />
        <button className = "restart" onClick = {() => this.restart()}>Restart</button>
        <div>
          {this.state.winState > 0 ? this.state.winState === 1 ? 'You win': 'You lose' : ''}
        </div>
      </div>  
    )}
}  //end of game component 

export default App; 
