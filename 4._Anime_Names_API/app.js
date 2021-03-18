// implementing express
const express = require("express");
const app = express();
app.use(express.json());

const port = 8080;
const animeNames = [
    {
        id: 1, 
        title: "Attack on Titan",
        weirdness: 6.8
    },
    {
        id: 2,
        title: "One Punch Man",
        protagonist: "Saitama"
    }
];
let AUTOINCREMENT = animeNames.length;

// GET
app.get("/anime_names", (req, res) =>{
    res.send({ data: animeNames });
});

app.get("/anime_names/:id", (req, res) => {
    const animeID = Number(req.params.id); // important to cast as number because of === to avoid type coercion
    const anime = animeNames.find(anime => anime.id === animeID);
    res.send({data: anime});
});

// POST
app.post("/anime_names", (req, res) => {
    const newAnimeName = req.body;
    newAnimeName.id = ++AUTOINCREMENT;
    animeNames.push(newAnimeName);
    res.send({ data: newAnimeName });
});


// PATCH
app.patch("/anime_names/:id", (req, res) => {
    animeNames = animeNames.map(animeName => {
        if (animeName.id === Number(req.params.id)){
            return {...animeName, ...req.body, id: animeName.id};
        }
        return animeName;
    });
});

// DELETE
app.delete("/anime_names/:id", (req,res) => {
    animeNames = animeNames.filter(animeName => animeName.id !== Number(req.params.id));
    res.send({ });
});




app.listen(port, (error) => {
    if (error) {
        console.log("Couldn't run server: ${​​error}");
    } else {
        console.log("Server is running on port", port);
    }
});