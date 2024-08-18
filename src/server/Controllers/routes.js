require('dotenv').config({path: '../../../.env'});
const { verifyRank, verifyTop5Genres } = require('../Services/verifyRank');
const Artists = require('../Models/Artists')
const path = require('path');
const express = require('express');
const app = express();
const port = 3000
let finalArtists = []

const resolver = (handlerFn) => {
    return (req, res, next) => {
      return Promise.resolve(handlerFn(req, res, next))
        .catch(e => next(e));
    }
  }

const createClassArtists = async (req, res, next) => {
    const tentativa = await verifyRank()
    tentativa.forEach(element => {
      const artist = new Artists(
        element.id, 
        element.name,
        element.followers.total,
        element.genres,
        element.popularity,
        element.images)
        finalArtists.push(artist)
    });
    next()
  }

app.use(resolver(createClassArtists));

app.get('/', (req, res) => {
  res.send(finalArtists)
  res.send('ativo')
})

app.listen(port, () =>{
    console.log('Servidor ativo na porta: ', port)
})