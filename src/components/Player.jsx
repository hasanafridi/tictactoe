import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [player, setPlayer] = useState(name);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange = (e) => {
    setPlayer(e.target.value);
  };

  let playerName = <span className="player-name">{player}</span>;

  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        value={player}
        onChange={handleChange}
      ></input>
    );
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
