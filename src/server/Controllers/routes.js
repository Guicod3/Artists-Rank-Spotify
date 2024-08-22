require('dotenv').config({path: '../../../.env'});
const config = require('../config.js')
const path = require('path');
const express = require('express');
const app = express();
const port = config.PORT;
app.use(express.static(path.join(__dirname, '../../client')))
const Artists = require('../Models/Artists.js');
const { verifyRank, verifyTop5Genres } = require('../Services/verifyRank.js');

const createClassElement = async () => {
  const finalArtists = []
  const sortArtists = await verifyRank()
            sortArtists.forEach(element => {
              const artist = new Artists(
                element.id, 
                element.name,
                element.followers.total,
                element.genres,
                element.popularity,
                element.images)
                finalArtists.push(artist)
            });
    return finalArtists
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/views/index.html'))
})

app.get('/api/artists', async (req, res) => {
  try {
    const dataArtists = await createClassElement()
    res.json(dataArtists)
  } catch (error) {
    res.status(500).send('Erro de processamento da api')
  }
})

app.get('/api/genres', async (req, res) => {
  try {
    const dataGenres = await verifyTop5Genres()
    res.json(dataGenres)
  } catch (error) {
    res.status(500).send('Erro de processamento da api')
  }
})

app.listen(port, () => {
  console.log('Servidor ativo na porta:', port);
});