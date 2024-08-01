import React, { useState } from 'react';
import Player from './components/player.jsx';
import Gameboard from './components/gameboard.jsx';
import Gameover from './components/gameisover.jsx';
import Log from './components/log.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  if (gameTurns.length === 0) {
    return 'X'; // The first player is always 'X'
  }

  const lastTurn = gameTurns[0];
  return lastTurn.player === 'X' ? 'O' : 'X';
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = initialBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winnerPlayer = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winnerPlayer = firstSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winnerPlayer;

  function handleActivePlayer(rowIndex, colIndex) {
    // setActivePlayer((selectedPlayed) => (selectedPlayed === 'X' ? 'O' : 'X'));
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === 'O'}
          />
        </ol>
        {(winnerPlayer || hasDraw) && <Gameover winner={winnerPlayer} />}
        <Gameboard onSelectedSquare={handleActivePlayer} board={gameBoard} />
      </div>
      <Log logturns={gameTurns} />
    </main>
  );
}

export default App;
