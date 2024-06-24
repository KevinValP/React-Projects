import { Winner_Combos } from '../Constants'

export const checkWinner = (boardToCheck) => {
    for (const combo of Winner_Combos) {
      const [a, b, c] = combo
      if (boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b]
        && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a]
      }
    }
    return null
}

export const checkEndGame = (boardToCheck) => {
    return boardToCheck.every((square) => square !== null)
  }