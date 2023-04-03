import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [location, setLocation] = useState(true);
  

  const handleGame = (clickedSquare) => {
    const squaresCopy = squares.slice();
    squaresCopy[clickedSquare] = location ? "❌" : "⭕️";
    setSquares(squaresCopy);
    setLocation(!location);
    for (let i=0; i

    )
    //   squaresCopy[(0, 1, 2)] === "❌" ||
      
    //   squaresCopy[(0, 3, 6)] === "❌" ||
    //   squaresCopy[(0, 3, 6)] === "⭕️" ||
    //   squaresCopy[(1, 4, 7)] === "❌" ||
    //   squaresCopy[(1, 4, 7)] === "⭕️" ||
    //   squaresCopy[(2, 5, 8)] === "❌" ||
    //   squaresCopy[(2, 5, 8)] === "⭕️" ||
    //   squaresCopy[(3, 4, 5)] === "❌" ||
    //   squaresCopy[(3, 4, 5)] === "⭕️" ||
    //   squaresCopy[(6, 7, 8)] === "❌" ||
    //   squaresCopy[(6, 7, 8)] === "⭕️" ||
    //   squaresCopy[(0, 4, 8)] === "❌" ||
    //   squaresCopy[(0, 4, 8)] === "⭕️" ||
    //   squaresCopy[(2, 4, 6)] === "❌" ||
    //   squaresCopy[(2, 4, 6)] === "⭕️"
    // ) {
    //   setTimeout(() => {
    //     alert("winner!");
    //   }, 30);
    // } else if (
    //   squaresCopy[(0, 1, 2)] === "⭕️" ||
    // )
  };

 





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
              handleGame={handleGame}
            />
            
          );
        })}
      </div>
          
      <button className="button" onClick={handleRestartButton}>
        Restart!
      </button>
    </>
  );
};

export default App