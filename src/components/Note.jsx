import React from "react";
// import DeleteIcon from '@mui/icons-material/Delete';
// import DeleteIcon from '@mui/material/Delete';


function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>Dustbin icon</button>
    </div>
  );
}

export default Note;
