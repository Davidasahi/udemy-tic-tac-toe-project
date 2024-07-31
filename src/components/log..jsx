import React from 'react';

export default function Log({ logturns }) {
  return (
    <ol id="log">
      {logturns.map((turn) => (
        <li
          key={`${turn.square.row}${turn.square.col}`}
          className="highlighted"
        >
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}
