//const express = require("express");
import express from 'express';
const app = express();

import helmet from 'helmet';
app.use(helmet());

import rateLimit from 'express-rate-limit';
const baseLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10 // limit each IP to 10 requests per windowMs
});

app.use(baseLimiter);

app.use("/auth/*", authLimiter);

app.get("/auth/login", (req, res) => {
    res.send({ message: "Logging in..." });
});

import session from 'express-session'; // npm i express-session
app.use(session({
    secret: 'keyboard cat lol', // put in .env
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // if HTTPS true otherwise false
}));

import sessionRouter from './router/session.mjs';
app.use(sessionRouter);

import password from './util/password.mjs';
//app.use(password);

const PORT = process.env.PORT || 3000;

const ipLogger = (req, res, next) => {
    console.log('IP: ',req.ip);
    req.myData = "this could be an alternative body"
    next();
};

app.use(ipLogger);

// --------------------------------------------------------------------------------------

app.get('/', (req, res, next) => {
    console.log("hit this route, but passes it on");
    next(); // calls next route that matches, but only if res.send isnt already sent
});

app.get('/', (req, res, next) => {
    res.send('<h1>Second Route</h1>');
});

app.get("/modifiedByMyCustomMiddleware", (req, res) => {
    res.send(req.myData);
});

// Has to be last - error page
app.get('/*', (req, res, next) => {
    res.status(404).send('<h1>This not good, this error page. Not found</h1>');
});

app.listen(PORT, (error) => {
    if(error) {
        console.log(error);
    }
    console.log('Server is running on localhost port: ', PORT);

});

// import defaultTextExport from "./test.mjs";

// console.log(defaultExport.cookieTray);

// // module.exports = {};

// export default {
//     cookieTray: [{}, {}]
// };