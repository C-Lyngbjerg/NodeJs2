const express = require("express");
const fs = require("fs");
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Initializing the routers
const projectsRouter = require("./routes/projects.js");
const contactsRouter = require("./routes/contacts.js");
const skillsRouter = require("./routes/skills.js");

// Making sure the app uses the routers
app.use(projectsRouter.router);
app.use(contactsRouter.router);
app.use(skillsRouter.router);

// Setting the ports and path to public folder
const port = process.env.PORT || 8080;
const pubDir = __dirname+"/public";

// Initializing the header, footer and pages for SSR
const header = fs.readFileSync(pubDir+"/header/header.html", "utf-8");
const footer = fs.readFileSync(pubDir+"/footer/footer.html", "utf-8");

const frontpage = fs.readFileSync(pubDir+"/frontpage/frontpage.html", "utf-8");
const projects = fs.readFileSync(pubDir+"/projects/projects.html", "utf-8");
const contacts = fs.readFileSync(pubDir+"/contacts/contacts.html", "utf-8");
const skills = fs.readFileSync(pubDir+"/skills/skills.html", "utf-8");

/*
GET request methods for frontpage, projects, contacts and skills
in that order. 
Each method their respective pages as an concatenated string with
header and footer on either side of the actual page.
*/

app.get("/", (req, res) => {
    res.send(header+frontpage+footer);
    //res.sendFile(pubDir+"/frontpage/frontpage.html"); <- Old version of sending the .html page
});

app.get("/projects", (req, res) => {
    res.send(header+projects+footer);
});

app.get("/contacts", (req, res) => {
    res.send(header+contacts+footer);
});

app.get("/skills", (req, res) => {
    res.send(header+skills+footer);
});


// .listen makes sure that the app runs continually rather than just once.
app.listen(port, (error) => {
    if (error) {
        console.log("Couldn't run server: ${​​error}");
    } else {
        console.log("Server is running on port:", Number(port));
    }
});

/*
TODO:
- Pages
    - Contacts
        - Information
    - Education
    - Recommendations
- Styling
    - Bootstrap
*/
