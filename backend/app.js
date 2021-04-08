const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log("Mongo running"))
    .catch(err => console.log(err))

app.get("/", (req, res) => {
    res.send("Home Page")
})

const port = process.env.port || 5000;
app.listen(port, ()=> console.log(`listening on port ${port}`))
