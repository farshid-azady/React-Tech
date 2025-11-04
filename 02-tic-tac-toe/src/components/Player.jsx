import React, { useState } from "react";

// Accept isActive so the parent can mark the active player
const Player = ({ initialName, symbol, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  function handleEditClick() {
    setIsEditing((edited) => !edited);
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  let playerContent = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    playerContent = (
      <input required type="text" value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
