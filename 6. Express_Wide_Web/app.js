const express = require("express");
const app = express();
app.use(express.json());

const port = process.env.PORT || 8080;
const pubDir = __dirname+"/public";
// most express pure html projects use public for html folder, not a hard rule though


app.get("/", (req, res) => {
    const filename = "/welcome.html"
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
        res.send({ doorman: "you poor"})
    }
    res.sendFile(pubDir +filename);
    // res.send({ topping: "cheese", name: "Margerita" });
});

app.listen(port, (error) => {
    if (error) {
        console.log("Couldn't run server: ${​​error}");
    } else {
        console.log("Server is running on port:", Number(port));
        // console.log(process.env.PORT);
    }
});