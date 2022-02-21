const express = require("express"); // library
const path = require('path') // path
const app = express(); // instance
//const port = 8080

app.use(express.json()); // allow us to parse json

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname + "/clock.html"));
});

app.get('/baseball',(req, res) => {
    res.sendFile(path.join(__dirname + "/baseball.jpg"));
});






app.listen(8080); // Specify what port it runs on. Always keep it in the bottom of the file.
