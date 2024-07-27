import React, { useState } from 'react';

const initBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gamebord({ onSelectedSquare, activePlayerSymbol }) {
  const [symbol, setSymbol] = useState(initBoard);

  function handleButton(rowIndex, colIndex) {
    setSymbol((previousBoard) => {
      const newBoard = [...previousBoard.map((innArr) => [...innArr])];
      newBoard[rowIndex][colIndex] = activePlayerSymbol;
      console.log('1', activePlayerSymbol);
      return newBoard;
    });
    console.log('2', activePlayerSymbol);
    onSelectedSquare();
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
