require('dotenv').config({path: '../../../.env'});
const request = require('request');
const config = require('../config.js');
const access_token = require('./AcessToken.js')

async function fetchArtists() {
    const token = await access_token()
    const url = config.url_ApiArtists + `?ids=${config.Ariana_Grande},${config.Ed_Sheeran},${config.Queen},${config.Maroon_5},${config.Imagine_Dragons},${config.Eminem},${config.Lady_Gaga},${config.Cold_Play},${config.Beyonce},${config.Bruno_Mars},${config.Rihanna},${config.Shakira},${config.Justin_Bieber},${config.Demi_Lovato},${config.Taylor_Swift}`

    const artistsOptions = {
        headers: {
            'Authorization': 'Bearer ' + token
        },
        json: true
    };

    try {
        const response = await fetch(url, artistsOptions);
        console.log(response.status)
        const data = await response.json()
        console.log(data.artists)
    } catch (error) {
        console.error('Falha em receber artistas: ', error)
    }
}


module.exports = fetchArtists;
