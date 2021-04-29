// instantiates express as an app and creates the router
const router = require("express").Router();

/*
Project Schema
    Title - (string)
    Description: (string)
    Creation date: (date)
    End date: (date)
    Language(s): (array)
    Tech used: (array)
    Image: (string)
    HostedLink: (string)
    GitLink: (string)
*/

const projects = [
    {
        title: "Nodefolio", 
        description: "Personal portfolio implemented in Node.js",
        startDate: new Date("2021-04-08").toDateString(),
        endDate: new Date("2021-04-15").toDateString(),
        gitLink: "https://github.com/C-Lyngbjerg/NodeJs2.git"
    },
    {
        title: "Node Documentation",
        description: "Documentation about what i have learned about Node.js implemented with same language",
        startDate: new Date("2021-03-07").toDateString(),
        endDate: new Date("2021-03-24").toDateString(),
        gitLink: "https://github.com/C-Lyngbjerg/NodeJs2.git"
    }
];

router.get("/api/projects", (req, res) => {
    res.send({ projects });
});

module.exports = {
    router
}

