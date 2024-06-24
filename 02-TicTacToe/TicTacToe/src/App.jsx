import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './Components/Square'
import { Turns } from './Constants'
import { checkWinner, checkEndGame } from './Logic/board'
import { WinnerModal } from './Components/WinnerModal'

function App () {
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? Turns.X
  })

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return (Array(9).fill(null))
  })
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setTurn(Turns.X)
    setBoard(Array(9).fill(null))
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === Turns.X ? Turns.O : Turns.X
    setTurn(newTurn)
    // Save board and turn in local storage
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    const newWiner = checkWinner(newBoard)
    if (newWiner) {
      confetti()
      setWinner(newWiner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tic-Tac-Toe</h1>
      <section className='game'>
        {board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          )
        })}
      </section>
      <section className='turn'>
        <Square isSelected={turn === Turns.X}>
          {Turns.X}
        </Square>
        <Square isSelected={turn === Turns.O}>
          {Turns.O}
        </Square>
      </section>
      <footer>
        <button onClick={resetGame}>Reiniciar</button>
      </footer>
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
