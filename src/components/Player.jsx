import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  // let btnEdit = "Edit";
  const editClickHandler = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
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
