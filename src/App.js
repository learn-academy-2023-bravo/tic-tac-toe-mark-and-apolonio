import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'
import swal from 'sweetalert';

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [location, setLocation] = useState(true);
  
  
  const handleGame = (clickedSquare) => {
    console.log(handleGame);
    if (squares[clickedSquare] !== null) {
      return;
    }
    const squaresCopy = squares.slice();
    squaresCopy[clickedSquare] = location ? "❌" : "⭕️";
    setSquares(squaresCopy);
    setLocation(!location);

    if ( 
      squaresCopy[0] === "❌" && squaresCopy[1] === "❌" && squaresCopy[2] === "❌" ||
      squaresCopy[3] === "❌" && squaresCopy[4] === "❌" && squaresCopy[5] === "❌" ||
      squaresCopy[6] === "❌" && squaresCopy[7] === "❌" && squaresCopy[8] === "❌" ||
      squaresCopy[0] === "❌" && squaresCopy[3] === "❌" && squaresCopy[6] === "❌" ||
      squaresCopy[1] === "❌" && squaresCopy[4] === "❌" && squaresCopy[7] === "❌" ||
      squaresCopy[2] === "❌" && squaresCopy[5] === "❌" && squaresCopy[8] === "❌" ||
      squaresCopy[0] === "❌" && squaresCopy[4] === "❌" && squaresCopy[8] === "❌" ||
      squaresCopy[2] === "❌" && squaresCopy[4] === "❌" && squaresCopy[6] === "❌"
    ) {
      swal("Player 1 Wins!")
      setTimeout(() => {
        window.location.reload()
        ;
      }, 2500);
    } else if (
      squaresCopy[0] === "⭕️" && squaresCopy[1] === "⭕️" && squaresCopy[2] === "⭕️" ||
      squaresCopy[3] === "⭕️" && squaresCopy[4] === "⭕️" && squaresCopy[5] === "⭕️" ||
      squaresCopy[6] === "⭕️" && squaresCopy[7] === "⭕️" && squaresCopy[8] === "⭕️" ||
      squaresCopy[0] === "⭕️" && squaresCopy[3] === "⭕️" && squaresCopy[6] === "⭕️" ||
      squaresCopy[1] === "⭕️" && squaresCopy[4] === "⭕️" && squaresCopy[7] === "⭕️" ||
      squaresCopy[2] === "⭕️" && squaresCopy[5] === "⭕️" && squaresCopy[8] === "⭕️" ||
      squaresCopy[0] === "⭕️" && squaresCopy[4] === "⭕️" && squaresCopy[8] === "⭕️" ||
      squaresCopy[2] === "⭕️" && squaresCopy[4] === "⭕️" && squaresCopy[6] === "⭕️"
    ) {
      swal("Player 2 Wins!")
      setTimeout(() => {
        window.location.reload()
        ;
      }, 2500);
    } else if (squaresCopy.every((square) => square)) {
      swal("Draw!")
      setTimeout(() => {
        window.location.reload()
        ;
      }, 2500);
    }
      
  }
   
  


  const handleRestartButton = () => {
    setSquares([" "," "," "," "," "," "," "," "," ", ])
  };

  return (
    <>
      <h1 className="title">Tic Tac Toe</h1>

      <div className="game-board">
        {squares.map((square, index) => {
          return (
            <Square
              square={square}
              index={index}
              key={index}
              handleGame = {handleGame}
              
            />
            
          );
        })}
      </div>
      
          
      <button className="button" onClick={handleRestartButton}>
        Restart!
      </button>
      <footer>
        Developed by Apolonio and Mark.
      </footer>
    </>
  );
};

export default App