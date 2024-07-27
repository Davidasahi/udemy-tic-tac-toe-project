import React, { useState } from 'react';
import Player from './components/player.jsx';
import Gamebord from './components/gameboard.jsx';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleActivePlayer() {
    setActivePlayer((selectedPlayed) => (selectedPlayed === 'X' ? 'O' : 'X'));
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
          activePlayerSymbol={activePlayer}
        />
      </div>
      Log
    </main>
  );
}

export default App;
