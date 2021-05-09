// const router = require('express').Router();
import express from 'express';
const router = express.Router();

router.get('/setsession', (req, res) => {
    req.session.date = new Date();
    res.send({});
});

router.get('/getsession', (req, res) =>{
    console.log(req.session.date);
    res.send({});
});

export default router;


// session.destroy

/* 
AWS step by step:
ssh ind i server
sudo apt update
install node
install npm
ubuntu has git preinstalled
git clone repo
cd to file
npm i // to install all the dependencies
use either pm2 or foreverjs
pm2 is anders' preferred
sudo npm i -g pm2
sudo pm2 start app.js
sudo pm2 stop 0
sudo pm2 start 0
*/

// gearhost
// rds