import React, { useState } from 'react';

const initBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gamebord({ onSelectedSquare, turns }) {
  let gameBoard = initBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  // const [gameBoard, setgameBoard] = useState(initBoard);

  // function handleButton(rowIndex, colIndex) {
  //   setgameBoard((previousBoard) => {
  //     const newBoard = [...previousBoard.map((innArr) => [...innArr])];
  //     newBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return newBoard;
  //   });
  //   onSelectedSquare();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectedSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
