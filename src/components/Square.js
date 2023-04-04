import React from 'react'

const Square = ({square, handleGame, index, gameWinner}) => {

const handleClick = () => {
  handleGame(index)
}

  return (
    <>
    <div className="square" onClick={handleClick}>{square}</div>
    
    
    </>
  )
}
export default Square
