const express = require("express");
const app = express();
// const app = require(express)();

// GET
app.get("/", (req, res) => {
    res.send({});
});

app.get("/me", (req, res) => {
    let me = {
        name: "Christoffer", 
        age: "27", 
        school: "KEA"
    }
    // const timejson = ;
    res.send(me);
});

app.get("/month", (req, res) => {
    const month  = new Date().toLocaleDateString('default', {month: 'long'});
    res.send(month);
});

app.get("/day", (req, res) => {
    const day  = new Date().toLocaleDateString('default', {weekday: 'long'});
    res.send(day);
});

app.get("/time", (req, res) => {
    const time  = new Date().toLocaleTimeString();
    res.send(time);
});

// POST

// DELETE

app.listen(8080) // starts the server on 8080, so it doesnt just stops