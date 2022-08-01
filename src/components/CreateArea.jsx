import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  const [hidden, setHidden] = useState(true);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleContentClick() {
    setHidden(!hidden);
  }

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
        {hidden ? <input
          onChange={handleChange}
          name="title"
          value={note.title}
          placeholder="Title"
        /> : null}
        
        
        <textarea
          onClick={handleContentClick}
          // onClick={() => {
          //   console.log("textareac Clicked")
          //   sethidden(s => !s)}}

          onChange={handleChange}
          name="content"
          value={note.content}
          placeholder="Take a note..."
        //if title input is hidden than textarea rows set to 1 otherwise its 3
        rows={!hidden?1:3}
        />
        <Zoom in={hidden}>
          <Fab
            onClick={submitNote}>
            <AddCircleIcon />
          </Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
