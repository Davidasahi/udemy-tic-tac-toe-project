import React, { useState } from 'react';
import Player from './components/player.jsx';
import Gamebord from './components/gameboard.jsx';
import Log from './components/log..jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  // else if (gameTurns.length > 0 && gameTurns.player === 'X') {
  //   currentPlayer = 'X';
  // }
  return currentPlayer;
}
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

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
        <Gamebord
          //if you want to pass the function to the child component, name it and pass the function within it.
          onSelectedSquare={handleActivePlayer}
          turns={gameTurns}
        />
      </div>
      <Log logturns={gameTurns} />
    </main>
  );
}

export default App;
