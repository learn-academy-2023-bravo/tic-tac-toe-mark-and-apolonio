import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

const handleGame = (clickedSquare) => {
  let updateBoard = [...squares]
  updateBoard[clickedSquare] = "❌"
  setSquares(updateBoard)
}


const handleRestartButton = () => {
  window.location.reload(true)
}

  return (
    <>
      <h1 className="title">Tic Tac Toe</h1>

      <div className="game-board">
      {
        squares.map((square, index) => {
          return <Square 
            square= {square}
            index={index}
            key={index}
            handleGame={handleGame}/>
        })
      }
      </div>

      <button className="button" onClick={handleRestartButton}>Restart!</button>

    </>
  )
}

export default App