const express = require("express");
const mongoose = require("mongoose");

const app = express();

const dbURI = `mongodb://localhost:27017`;

const PORT = 3000;

mongoose.connect(dbURI).then( (result) => {
    app.listen(PORT, () => { console.log(`listening on http://localhost:3000/`)});
}).catch( (err) => console.log(err));




//setting up view engine
app.set("view engine", "ejs");

//using static middleware to acces static files
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/",(req,res) => {

    res.render("index");
});