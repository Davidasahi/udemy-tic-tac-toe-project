import React, { useState } from 'react';

const initBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gamebord() {
  const [symbol, setSymbol] = useState(initBoard);

  function handleButton(rowIndex, colIndex) {
    setSymbol((previousBoard) => {
      const newBoard = [...previousBoard.map((innArr) => [...innArr])];
      newBoard[rowIndex][colIndex] = 'X';
      return newBoard;
    });
  }

  return (
    <ol id="game-board">
      {symbol.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleButton(rowIndex, colIndex)}>
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
