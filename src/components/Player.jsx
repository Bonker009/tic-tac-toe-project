import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  // let btnEdit = "Edit";
  const editClickHandler = () => {
    setIsEditing((editing) => !editing);
    // btnEdit = "Save";
  };
  function handleChange(event) {
    // console.log(event);
    setPlayName(event.target.value);
  }

  return (
    <>
      <li className={isActive ? "active" : ""}>
        <span className="player">
          {isEditing ? (
            <input
              type="text"
              value={playerName}
              required
              onChange={handleChange}
            />
          ) : (
            <span className="player-name">{playerName}</span>
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={editClickHandler}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </li>
    </>
  );
}
