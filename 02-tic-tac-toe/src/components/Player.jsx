import React, { useState } from "react";

const Player = ({ initialName, symbol }) => {
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
    <li>
      <span className="player">
        {playerContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
