const express = require("express");
const app = express();

const port = 8080;
const pubDir = __dirname+"/public";
// most express pure html projects use public for html folder, not a hard rule though


app.get("/", (req, res) => {
    const filename = "/welcome.html"
    res.sendFile(pubDir +filename);
});

app.listen(port, (error) => {
    if (error) {
        console.log("Couldn't run server: ${​​error}");
    } else {
        console.log("Server is running on port", port);

    }
});