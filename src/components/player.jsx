import React, { useState } from 'react';

export default function Player({ initialName, symbol }) {
  const [playerName, setplayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((Editing) => !Editing);
  }

  function handleOnChangeName(e) {
    console.log(e);
    setplayerName(e.target.value);
  }

  let editingplayerName = <span className="player-name">{playerName}</span>;

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleOnChangeName}
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
