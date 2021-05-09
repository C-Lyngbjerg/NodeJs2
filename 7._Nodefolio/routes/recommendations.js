// instantiates express as an app and creates the router
const router = require("express").Router();

const recommendations = 
    [{
        title: "<Company Name 1>", 
        reference: "<Name of reference>",
        description: "<Description of commendable work habits and a good disposition>",
        startDate: "<start date>",
        endDate: "<end date>"
    },
    {
        title: "<Company Name 2>", 
        reference: "<Name of reference>",
        description: "<Description of commendable work habits and a good disposition>",
        startDate: "<start date>",
        endDate: "<end date>"
    },
    {
        title: "<Company Name 3>", 
        reference: "<Name of reference>",
        description: "<Description of commendable work habits and a good disposition>",
        startDate: "<start date>",
        endDate: "<end date>"
    },
    {
        title: "<Company Name 4>", 
        reference: "<Name of reference>",
        description: "<Description of commendable work habits and a good disposition>",
        startDate: "<start date>",
        endDate: "<end date>"
    }];

router.get("/api/recommendations", (req, res) => {
    res.send({ recommendations });
});

module.exports = {
    router
}
