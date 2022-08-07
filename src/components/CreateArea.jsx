import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import Fade from '@mui/material/Fade';



function CreateArea(props) {
  const [hidden, setHidden] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleContentClick() {
    // fetch("http://localhost:3000/")
    


    if (note.title === "") {
      setHidden(!hidden);
    }
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
<Fade in={true}>
    <div>
      <form className="create-note" action="http://localhost:4000/" mathod="POST" >
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
          rows={!hidden ? 1 : 3}
        />
        <Zoom in={hidden}>
          <Fab
            onClick={submitNote}>
            <AddCircleIcon />
          </Fab>
        </Zoom>

      </form>
    </div>
        </Fade>
  );
}

export default CreateArea;
