// /usr/local/mysql/bin/mysql -u root -p
const dotenv = require('dotenv').config();
const mysql  = require('mysql');

const connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER, 
    password : process.env.DB_PASSWORD, 
    database : process.env.DB_DATABASE
});

connection.connect();

// CREATE TABLE beers (name VARCHAR(15), alcprc VARCHAR(15))
if( process.argv.includes('--createdb')) {
    console.log("creation mode activated");
    const createBeersTable = 'CREATE TABLE beers (name VARCHAR(15), alcprc VARCHAR(15))';
    connection.query(createBeersTable, (error, result, fields) => {
        if(error){
            throw new Error(error);
        }
        console.log(result);
        connection.end();
    });
}