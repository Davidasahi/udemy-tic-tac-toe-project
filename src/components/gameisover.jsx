import React from 'react';

const GameIsOver = ({ winner, onRestart }) => {
  return (
    <div id="game-over">
      <h2>GameOver</h2>
      {console.log(winner)}
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
};

export default GameIsOver;
