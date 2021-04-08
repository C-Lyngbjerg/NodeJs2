const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static('public'));
const fetch = require('node-fetch');
fs = require('fs');


const port = process.env.PORT || 8080;
const pubDir = __dirname+"/public";

// most express pure html projects use public for html folder, not a hard rule though


app.get("/", (req, res) => {
    const filename = "/welcome/welcome.html"
    res.sendFile(pubDir +filename);
});

app.get("/catfacts", (req, res) => {
    const filename = "/catfacts.html"
    res.sendFile(pubDir +filename);
});

app.get("/pizza", (req, res) => {
    const filename = "/pizza.html"
    res.sendFile(pubDir +filename);
    // res.send({ topping: "cheese", name: "Margerita" });
});

app.get("/whiskey", (req, res) => {
    res.send({ barkeep: "Here ya go" });
    // res.send({ topping: "cheese", name: "Margerita" });
});

app.get("/pub", (req, res) => {
    if (Number(req.query.money) > 500)  {
        res.redirect("/whiskey");
    } else {
        res.send({ doorman: "you poor"});
    }
    res.sendFile(pubDir +filename);
    // res.send({ topping: "cheese", name: "Margerita" });
});

app.get("/candle", (req, res) => {
    if(req.query.blow === "blow"){
        res.send({ lightsOn: "false"});
    }else {
        res.send({ lightsOn: "true"});
    }
});

app.get("/proxy", (req, res) => {
    const filename = "/proxy.html";
    fetch("https://google.dk")
    .then(response => response.textConverted())
    .then(body => res.send(body))
});
// if you didnt use if/else and just if - l40 would try to set header again after 
// you already sent in l38

app.listen(port, (error) => {
    if (error) {
        console.log("Couldn't run server: ${​​error}");
    } else {
        console.log("Server is running on port:", Number(port));
        // console.log(process.env.PORT);
    }
});