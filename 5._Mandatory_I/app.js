const express = require("express");
const app = express();
app.use(express.json());

const port = process.env.PORT || 8080;
const pubDir = __dirname+"/public";

// GET
app.get("/", (req, res) => {
    const filename = "/index.html"
    res.sendFile(pubDir +filename);
});
app.get("/functions", (req, res) => {
    const filename = "/functions.html"
    res.sendFile(pubDir +filename);
});

app.get("/objects", (req, res) => {
    const filename = "/objects.html"
    res.sendFile(pubDir +filename);
});

app.get("/terminal", (req, res) => {
    const filename = "/terminal.html"
    res.sendFile(pubDir +filename);
});

app.get("/express", (req, res) => {
    const filename = "/express.html"
    res.sendFile(pubDir +filename);
});

app.listen(port, (error) => {
    if (error) {
        console.log("Couldn't run server: ${​​error}");
    } else {
        console.log("Server is running on port", port);
    }
});