const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const NoteModel = require("./models/Note");
const cors = require("cors");
const { Note } = require("@mui/icons-material");
const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(cors());


// const [notes, setNotes] = useState([]);
// const notes =[];
// const note ={
//   title:"",
//   content:""
// };


app.use(bodyParser.urlencoded({
  extended: true
}));

// mongoose.connect("mongodb://localhost:27017/keeper-appDB");
mongoose.connect(
  "mongodb+srv://admin-ronksks:Test123@cluster0.80wja.mongodb.net/keeper-appDB",
  {
    useNewUrlParser: true,
  }
);


////// works but not retriveing data
app.get("/api", async(req,res)=>{
  NoteModel.find({},(err, result)=>{
    if(err){
      res.send(err);
    }
    res.send(result);
  });
    // res.json({"users": ["user1", "user2", "user3"]});

    // res.send("Its working");
});



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