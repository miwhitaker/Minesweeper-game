
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

function App(props) {
  let array = []
  for(let j = 0; j < 5; j++) {
    array.push(<Row />)
  }
  return (
    <div>
      {array}
    </div>)
}
    
/*class Game extends React.Component {
  constructor(props) {
    super(props)
    const mines = {location: [0][0]}
    const winThing = 
          {isMine: false, 
           values: {isClicked: false,
                    isRtClicked: false,
                    numNearMines: 0        
          }}
    const stateArr = []
    for(let i = 0; i < 5; i++) {
      stateArr.push(Object.clone(winThing))
    }
console.log(stateArr)
}   //end of constructor
  
  handleClick() {}
  render() {}
}  //end of game component

*/

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
