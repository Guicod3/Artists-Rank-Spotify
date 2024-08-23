require('dotenv').config({path: '../../../.env'});
const config = require('../config.js');
const access_token = require('./AcessToken.js')

async function fetchMusic(id) { //Recebe o Json das músicas
    const token = await access_token()
    const url = `https://api.spotify.com/v1/artists/${id}/top-tracks`

    const artistsOptions = {
        headers: {
            'Authorization': 'Bearer ' + token
        },
        json: true
    };

    try {
        const response = await fetch(url, artistsOptions);
        if (response.status === 200){
            const data = await response.json()
            return data.tracks
        }                  
    } catch (error) {
        console.error('Falha em receber artistas: ', error)
    }
}

async function fetchAlbum(id) { //Recebe o Json das músicas
    const token = await access_token()
    
    const url = `https://api.spotify.com/v1/artists/${id}/albums`

    const artistsOptions = {
        headers: {
            'Authorization': 'Bearer ' + token
        },
        json: true
    };

    try {
        const response = await fetch(url, artistsOptions);
        if (response.status === 200){
            const data = await response.json()
            return data.items
        }                  
    } catch (error) {
        console.error('Falha em receber artistas: ', error)
    }
}

module.exports = {
    fetchMusic,
    fetchAlbum
}