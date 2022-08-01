import React, { useState } from "react";

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
      <form>
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
        <button onClick={submitNote}>Add</button>{" "}
      </form>
    </div>
  );
}

export default CreateArea;