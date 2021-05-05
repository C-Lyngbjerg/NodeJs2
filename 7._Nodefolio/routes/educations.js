// instantiates express as an app and creates the router
const router = require("express").Router();

const education = [
    {
        title: "Datamatiker", 
        type: "Erhvervsakademiuddannelse på KEA",
        years: "2019-2021",
        description: "Videregående uddannelse i software udvikling"
    },
    {
        title: "Lingvistik", 
        type: "Akademisk uddannelse på KUA",
        years: "2014-2017",
        description: "Akademisk uddannelse med fokus på sproglige funktioner og systematiker"
    },
    {
        title: "Ordrup Gymnasium", 
        type: "STX på OG",
        years: "2009-2012",
        description: "Gymnasiel uddannelse på sproglig og samfundsfaglig linie"
    }
];

router.get("/api/educations", (req, res) => {
    res.send({ education });
});

module.exports = {
    router
}

