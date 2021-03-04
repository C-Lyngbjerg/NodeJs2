// implementing express
const express = require("express");
const app = express();

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

// PUT

// DELETE




app.listen(port, (error) => {
    if (error) {
        console.log("Couldn't run server: ${​​error}");
    } else {
        console.log("Server is running on port", port);
    }
});