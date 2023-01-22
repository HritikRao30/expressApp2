'use-strict'

const http = require("http");
const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send("Hello World!!");
});

app.listen(PORT, HOST);
console.log(`Running on HTTP://${PORT}`);
