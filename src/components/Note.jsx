import React from "react";

function Note(item) {
  function handleClick() {
    item.onDelete(item.id);
  }
  return (
    <div className="note">
      <h1>{item.title}</h1>
      <p>{item.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
