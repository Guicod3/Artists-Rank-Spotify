const Artists = require('../Models/Artists.js')
const fetchArtists = require('./ApiServices.js')
let artistsMap = {}

async function createClassArtists() {
    const data = await fetchArtists()
    data.forEach(artist => {
        artistsMap[artist.id] = new Artists(
            artist.id,
            artist.name,
            artist.followers.total,
            artist.genres,
            artist.popularity,
            artist.images
        )
    });
}

async function getArtists(id) {
    if (!artistsMap[id]){
        await createClassArtists();
    }

    return artistsMap[id];
}

module.exports = getArtists;





