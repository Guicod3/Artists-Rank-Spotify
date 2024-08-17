require('dotenv').config({path: '../../.env'});
const Artists = require('../Models/Artists.js')
const fetchArtists = require('./ApiServices.js')
let artistsMap = {}

async function createClassArtists() {
    const data = await fetchArtists()
    data.forEach(artist => {
        artistsMap[artist.name] = new Artists(
            artist.id,
            artist.name,
            artist.followers.total,
            artist.genres,
            artist.popularity,
            artist.images
        )
    });
}

async function getArtists(name) {
    if (!artistsMap[name]){
        await createClassArtists();
    }

    return artistsMap[name];
}

module.exports = getArtists;






