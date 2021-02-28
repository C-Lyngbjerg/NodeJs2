const express = require("express");
const app = express();
app.use(express.json());

// Code from class, saved for reference
const emptyJSON = {};


app.get("/search", (req, res) => { 
    const query1 = req.query;
    res.send({searchquery: query1});
})

app.get("/telegram/:message/:name", (req, res) => { 
    const msg = req.params.message;
    const nme = req.params.name;
    res.send({name: nme,message: msg});
})
app.listen(8080);

// passing value with get 8080?<key>=<value>&<anotherKey>=<anotherValue>

// New Code for complete CRUD API
let data = ["Hades", "Lupin", "Warhammer", "NodeJS"];

// GET
app.get("/goodstuff", (req, res) => { 
    res.send({data});
});
// POST
app.post("/goodstuff", (req, res) => {
    // const body = req.body
    data.push(req.body.value);
    res.send({body: req.body});
});

// PUT
app.put("/goodstuff/:value", (req, res) => {
    let upOldVal = req.params.value;
    let upNewVal = req.body.value;
    let indOfOldVal = data.indexOf(upOldVal);
    
    if(indOfOldVal > -1){
        data.splice(indOfOldVal, 1, upNewVal);
        console.log(data);
    }
    res.send(upOldVal + " has been updated to " + upNewVal)
});


// DELETE
app.delete("/goodstuff/:value", (req, res) => {
    let delVal = req.params.value;
    if(data.indexOf(delVal) > -1){
        let delInd = data.findIndex(d => d == delVal);
        data.splice(delInd, 1);
        res.send(req.params.value + " has been deleted");
    }else{
        res.send(req.params.value + " couldnt be deleted");
    }
});