const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = mongoose()

app.get("/", (req, res) => {
    res.send("Home Page")
})

const port = process.env.port || 5000;
app.listen(port, ()=> console.log(`listening on port ${port}`))
