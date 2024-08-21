const liRank = document.getElementById('liArtist')
const liGenres = document.getElementById('liGenres')

const FirstLetter = (text) => { //Retornar a primeira letra maiúscula
    return text
      .toLowerCase()
      .replace(/^\w/, c => c.toUpperCase());
  };

document.addEventListener('DOMContentLoaded', () =>{ //Load ranking and genres
    setTimeout( async () => {
        let dataArtists = null
        let dataGenres = null
        try {
            const response = await fetch('/api/artists')
            const response2 = await fetch('/api/genres')
            const data = await response.json()
            const data2 = await response2.json()
            dataArtists = data
            dataGenres = data2
            console.log(dataArtists)
            console.log(dataGenres)
        } catch (error) {
            console.error('Erro na API', error)
        }

        dataArtists.forEach((item, index) =>{
            //Create Components
            const spanImagem = document.createElement('img')
            const spanPosition = document.createElement('span')
            const spanName = document.createElement('span')
            const spanFollowers = document.createElement('span')
            const li = document.createElement('li')
            const a = document.createElement('a')

            //Create ClassName
            li.className = "flex items-center justify-start text-xl transition hover:bg-green-600 px-2 py-1 rounded-lg hover:-translate-y-1 hover:scale-110 max-sm:text-sm"
            spanPosition.className = 'mr-5 w-10 max-sm:hidden'
            spanImagem.className = 'w-8 h-8 rounded-lg mr-5 max-sm:mr-2 max-sm:size-7'
            spanFollowers.className = 'ml-auto'

            //Changes
            spanImagem.src = item.images[2].url
            spanImagem.alt = item.name
            spanPosition.textContent = (index + 1).toString();
            spanName.textContent = item.name
            spanFollowers.textContent = new Intl.NumberFormat().format(item.followers);

            //AppendChild
            li.appendChild(spanPosition)
            li.appendChild(spanImagem)
            li.appendChild(spanName)
            li.appendChild(spanFollowers)
            liRank.appendChild(li)
        })

        dataGenres.forEach((item, index) =>{
            //Create Components
            const spanImagem = document.createElement('img')
            const spanPosition = document.createElement('span')
            const spanGenre = document.createElement('span')
            const li = document.createElement('li')

            //Create ClassName
            li.className = "flex items-center justify-start text-xl transition hover:bg-green-600 px-2 py-1 rounded-lg hover:-translate-y-1 hover:scale-110 max-sm:text-sm"
            spanPosition.className = 'mr-5 max-sm:hidden'
            spanImagem.className = 'w-8 h-8 rounded-lg mr-5 max-sm:mr-2 max-sm:size-7'

            //Changes
            spanImagem.src = './assets/Spotify-Icon.png'
            spanImagem.alt = 'Logo'
            spanPosition.textContent = (index + 1).toString();
            spanGenre.textContent = FirstLetter(item[0])

            //AppendChild
            li.appendChild(spanPosition)
            li.appendChild(spanImagem)
            li.appendChild(spanGenre)
            liGenres.appendChild(li)

            //off loading
            document.getElementById('loadingIndicator1').classList.add('hidden');
            document.getElementById('loadingIndicator2').classList.add('hidden');
        })

    }, 2500);
})