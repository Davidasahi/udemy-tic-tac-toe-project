import React, { useState } from 'react';
import Player from './components/player.jsx';
import Gameboard from './components/gameboard.jsx';
import Gameover from './components/gameisover.jsx';
import Log from './components/log.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
};

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((arr) => [...arr])]; //We need a deep copy, not a referral copy

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function deriveWinner(gameBoard, playerSymbol) {
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
      winnerPlayer = playerSymbol[firstSquareSymbol];
    }
  }
  return winnerPlayer;
}

function deriveActivePlayer(gameTurns) {
  if (gameTurns.length === 0) {
    return 'X'; // The first player is always 'X'
  }

  const lastTurn = gameTurns[0];
  return lastTurn.player === 'X' ? 'O' : 'X';
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [playerSymbol, setplayerSymbol] = useState(PLAYERS);
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winnerPlayer = deriveWinner(gameBoard, playerSymbol);
  const hasDraw = gameTurns.length === 9 && !winnerPlayer;

  function handleActivePlayer(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerSymbol(symble, newPlayerName) {
    setplayerSymbol((prevPlayers) => {
      return {
        ...prevPlayers,
        [symble]: newPlayerName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === 'X'}
            playerChange={handlePlayerSymbol}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === 'O'}
            playerChange={handlePlayerSymbol}
          />
        </ol>
        {(winnerPlayer || hasDraw) && (
          <Gameover winner={winnerPlayer} onRestart={handleRestart} />
        )}
        <Gameboard onSelectedSquare={handleActivePlayer} board={gameBoard} />
      </div>
      <Log logturns={gameTurns} />
    </main>
  );
}

export default App;
