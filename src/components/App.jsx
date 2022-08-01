import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

/// git  test
function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      //we return all the prevNotes, and add the newNote
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    console.log("delete clicked");

    setNotes((prevNotes) => {
      //we filter all the prevNotes and for each note
      // we check if its id != to the id we recived
      //from the deletion func
      return prevNotes.filter((noteItem, index) => {
        console.log(noteItem.id, index);
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            //we pass to the note an attribute that contains a deleteNote function
            // then we can access it trought the props inside the note itself
            onDelete={deleteNote}
          />
        );
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}

      <Footer />
    </div>
  );
}

export default App;
