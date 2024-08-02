import React, { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  playerChange,
}) {
  const [playerName, setplayerName] = useState(initialName); //One for value, one for handle function
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((Editing) => !Editing);

    if (isEditing) {
      playerChange(symbol, playerName);
    }
  }

  function handleOnChangeName(e) {
    console.log(e);
    setplayerName(e.target.value);
  }

  let editingplayerName = <span className="player-name">{playerName}</span>;

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName} //2 ways=>set the value to the useState
            onChange={handleOnChangeName} //2 ways=>Set the value to your typing(Input only)
          />
        ) : (
          editingplayerName
        )}
        <span className="player-sumbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'save' : 'edit'}</button>
    </li>
  );
}
