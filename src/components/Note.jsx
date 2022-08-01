import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  function handleDelete() {
    // the note ID is sent back trough the props to the
    //onDelete func in app.jsx
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>
      <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
