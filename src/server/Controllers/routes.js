require('dotenv').config({path: '../../../.env'});
const config = require('../config.js')
const path = require('path');
const express = require('express');
const app = express();
const port = config.PORT;
app.use(express.static('/monkCASE/src/client'));

const resolver = (handlerFn) => {
    return (req, res, next) => {
      return Promise.resolve(handlerFn(req, res, next))
        .catch(e => next(e));
    }
  }

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/views/index.html'))
})

app.listen(port, () =>{
    console.log('Servidor ativo na porta: ', port)
})