require('dotenv').config({path: '../../../.env'});
const path = require('path');
const config = require('../config')
const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../../client/views/index.html'))
})

app.get('/artist/:id', (req, res) =>{
    res.sendFile(path.join(__dirname, '../../client/views/index.html'))
})

app.listen(port, () =>{
    console.log(port)
})