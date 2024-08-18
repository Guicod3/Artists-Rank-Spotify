const fetchArtists = require('./ApiServices.js')


async function verifyRank() {

    const data = await fetchArtists()
    const popArtists = data.filter(artist => artist.genres.includes('pop'));
    const sortArtists = popArtists.sort((a, b) => b.followers.total - a.followers.total)

    return sortArtists
}

async function verifyTop5Genres() {

    const data = await fetchArtists()
    let genres = data.flatMap(artist => artist.genres);
    let countGenres = {}

    genres.forEach((element) => {
        if(element in countGenres){
            countGenres[element] += 1
        } else{
            countGenres[element] = 1
        }
    });

    const sortGenres = Object.entries(countGenres)
    .sort((a, b) => b[1] - a[1])

    return sortGenres.slice(0,5)
}

module.exports = {
    verifyRank,
    verifyTop5Genres
}

