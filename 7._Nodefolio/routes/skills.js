const router = require("express").Router();

const skills = [
    {
        title: "Node.js", 
        explanation: "A JavaScript runtime built on Chrome's V8 JS engine",
        progress:"50"
    },
    {
        title: "Java",
        explanation: "An object orientated programming Language",
        progress:"75"
    },
    {
        title: "Python",
        explanation: "An object orientated programming Language good for scripts and handling large data sets easily",
        progress:"65"
    },
    {
        title: "Swift",
        explanation: "Language used to create iOS applications",
        progress:"45"
    }
];

router.get("/api/skills", (req, res) => {
    res.send({ skills });
});

module.exports = {
    router
}