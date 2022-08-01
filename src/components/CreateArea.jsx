import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Fab from '@mui/material/Fab';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(e) {
    // deconstructing the e.target into 2 consts
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        // the previous notes
        ...prevNote,
        // the [name] is the key, and the value is the content
        [name]: value
      };
    });
  }

  function submitNote(e) {
    //sending the note to the onAdd funct in app.jsx
    //trough the props
    props.onAdd(note);
    e.preventDefault();
    setNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form className="create-note">
        <input
          onChange={handleChange}
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <Fab onClick={submitNote}>
        <AddCircleIcon />
        </Fab>{" "}
      </form>
    </div>
  );
}

export default CreateArea;
