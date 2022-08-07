const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();

// const [notes, setNotes] = useState([]);
const notes =[];
const note ={
  title:"",
  content:""
};


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/kepperDB");

const noteSchema = new mongoose.Schema({title: String,
    content: String});

const Note = mongoose.model("Note", noteSchema);

app.get("/api", (req,res)=>{
    // res.json({"users": ["user1", "user2", "user3"]});
    res.send("Its working");
})



app.post("/api", (req,res)=>{
const note = new note;
  note.title = req.body.title;
  note.content = req.body.content;
  notes.add(note);
  res.send("note");

// console.log(notes);
});

app.delete((req,res)=>{

});



app.listen(4000, ()=> {
    console.log("Server started on port 4000");
  });