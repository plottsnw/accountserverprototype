// index.js
'use strict'

const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const connectionString = 'postgres://postgres:root@localhost/postgres'; //TODO move to config file

let dbConnection;

pg.connect(connectionString, (err, client, done) => {
    if (err) {
        console.log("Connecting to database failed.");
        console.log(err);
        throw err;
    }

    dbConnection = client;
});

app.use(bodyParser.json());

app.use(express.static('public')); //necessary to serve js files to index.html

app.use((err, req, res, next) => {
    handleRequestError(err, req, res, next);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/createaccount', (req, res, next) => {
    createAccount(req, res, next);
});

app.post('/login', (req, res, next) => {
    login(req, res, next);
});

function handleRequestError(err, req, res, next) {
    console.log(err);
    res.status(500).send("Something went wrong!");
}

function createAccount(req, res, next) {
    const user = req.body;

    dbConnection.query('INSERT INTO Users (email, password) VALUES ($1, $2);',
        [user.email, user.password], function (err, result) { //TODO hash password
            if (err) {
                return next(err);
            }

            res.sendStatus(200);
        })
}

function login(req, res, next) {
    const user = req.body;

    dbConnection.query('SELECT password FROM Users WHERE email=$1;', [user.email], (err, result) => {

        if (err) {
            return next(err);
        }

        if (result.rows[0].password === user.password) {
            res.sendStatus(200);
        } else {
            res.sendStatus(403);
        }
    })
}

app.listen(port);