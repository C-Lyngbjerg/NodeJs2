const router = require("express").Router();

const skills = [
    {
        title: "Node.js", 
        explanation: "A JavaScript runtime built on Chrome's V8 JS engine",
        progress:"0.5"
    },
    {
        title: "Java",
        explanation: "An object orientated programming Language",
        progress:"0.75"
    }
];

router.get("/api/skills", (req, res) => {
    res.send({ skills });
});

module.exports = {
    router
}