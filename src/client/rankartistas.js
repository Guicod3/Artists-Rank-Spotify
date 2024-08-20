const liRank = document.getElementById('liArtist')
console.log('aqui foi 2')
import { Artists } from '../server/Models/Artists.js';
import { verifyRank, verifyTop5Genres } from '../server/Services/verifyRank.js';
finalArtists = []
console.log('aqui foi')

document.addEventListener('DOMContentLoaded', async () =>{
            const sortArtists = await verifyRank()
            console.log(sortArtists)
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

        finalArtists.forEach((item, index) =>{
            const li = document.createElement('li')
            const span = document.createElement('span')
            li.textContent = item.name
            li.className = "flex space-x-3 transition delay-50 hover:bg-green-600 px-2 py-1 rounded-lg items-center hover:-translate-y-1 hover:scale-110"
            span.textContent = (index + 1).toString();
            li.appendChild(span)
            liRank.appendChild(li)
        })
})