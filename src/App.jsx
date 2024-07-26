import Player from './components/player.jsx';
import Gamebord from './components/gameboard.jsx';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        <Gamebord />
      </div>
      Log
    </main>
  );
}

export default App;