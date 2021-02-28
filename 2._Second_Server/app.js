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


// create a route called about that serves a hardcoded version number in a string
const version = {version: "v0.1.2"}
app.get("/about", (req, res) => {
    res.send(version);
})

app.get("/page", (req, res) => {
    res.send("<h1>Welcome</h1>");
})
// POST

// DELETE

app.listen(8080) // starts the server on 8080, so it doesnt just stops