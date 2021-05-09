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
        startDate: "2021-04-08",
        endDate: "2021-04-15",
        gitLink: "https://github.com/C-Lyngbjerg/NodeJs2/tree/main/7._Nodefolio"
    },
    {
        title: "Node Documentation",
        description: "Documentation about what i have learned about Node.js implemented with same language",
        startDate: "2021-03-07",
        endDate: "2021-03-24",
        gitLink: "https://github.com/C-Lyngbjerg/NodeJs2/tree/main/5._Mandatory_I"
    },
    {
        title: "Node Socket Chat Project",
        description: "Small project to make a socket based chat programt that could be hosted on AWS or Heroku",
        startDate: "2021-05-06",
        endDate: "2021-05-07",
        gitLink: "https://github.com/C-Lyngbjerg/socket_project_chat"
    }
];

router.get("/api/projects", (req, res) => {
    res.send({ projects });
});

module.exports = {
    router
}

