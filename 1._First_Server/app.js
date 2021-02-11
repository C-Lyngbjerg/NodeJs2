const express = require("express");
const app = express();
const user = {
    name: "Christoffer",
    grade: 12,
    course: "NodeJs"
}

// find a noun - something to CRUD - what kind of datatype to store in
// implement get and get by id - id can be hardcoded if needed
app.get("/", (req, res) =>{
    res.send({message: "First call to /"});
});

app.get("/anotherpath", (req, res) => {
    res.send({message: "another thing"})
});

app.listen(8080);