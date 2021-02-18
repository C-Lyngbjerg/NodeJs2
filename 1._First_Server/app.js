const express = require("express");
const app = express();
const students = 
    [{
        id: 1,
        name: "Christoffer",
        grade: 07,
        course: "NodeJs"
    },
    {
        id: 2,
        name: "Cecilie",
        grade: 12,
        course: "NodeJs"
    },
    {
        id: 3,
        name: "Jakob",
        grade: 12,
        course: "CreativeCode"
    },
    {
        id: 4,
        name: "Sebastian",
        grade: 10,
        course: "NodeJs"
    }]
    const greeting = {value:"Greetings, please go to /students or /students/<id>"}

// find a noun - something to CRUD - what kind of datatype to store in
// implement get and get by id - id can be hardcoded if needed
app.get("/", (req, res) => {
    res.send(greeting);
});

app.get("/students", (req, res) => {
    res.send(students)
});

app.get("/students/:id", (req, res) => {
    let studentsList = students.filter((s) => s.id == req.params.id)
    res.send(studentsList);
});

app.listen(8080);

// (method) Array<{ id: number; name: string; grade: number; course: string; }>
// .map<string>(callbackfn: (value: { id: number; name: string;  grade: number; course: string;}, 
//     index: number, 
//     array: {id: number; name: string; grade: number; course: string; }[]) => string, thisArg?: any): string[]
// Calls a defined callback function on each element of an array, and returns an array that contains the results.

// @param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

// @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.