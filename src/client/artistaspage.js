const header = document.getElementById('header')
const title = document.getElementById('title')
const body = document.getElementById('body')

const FirstLetter = (text) => { //Retornar a primeira letra maiúscula
    return text
      .toLowerCase()
      .replace(/^\w/, c => c.toUpperCase());
  };

document.addEventListener('DOMContentLoaded', () =>{ //Load artist
    const id = window.location.pathname.split('/').pop();
    setTimeout( async () => {
        let dataArtists = null
        try {
            const response = await fetch('/api/artists')
            const data = await response.json()
            dataArtists = data[id]
        } catch (error) {
            console.error('Erro na API', error)
        }

        //Create Components Header
        const spanArtistImagem = document.createElement('img')
        const divHeaderGeneral = document.createElement('div')
        const spanNameArtist = document.createElement('span')
        const divHeaderSeguidores = document.createElement('div')
        const divHeaderGeneros = document.createElement('div')
        const spanNumSeguidores = document.createElement('span')
        const spanSeguidores = document.createElement('span')
        const spanGeneros = document.createElement('span')
        const spanNameGeneros = document.createElement('span')

        //Create ClassName Header
        spanArtistImagem.className = 'size-64 mr-5 rounded-lg'
        divHeaderGeneral.className = 'flex flex-col mr-auto mb-auto'
        spanNameArtist.className = 'text-8xl font-extrabold mt-7 mb-5'
        divHeaderSeguidores.className = 'ml-1 text-lg font-bold'
        divHeaderGeneros.className = 'ml-1 text-lg font-bold'
        spanNumSeguidores.className = 'text-green-500'

        //Changes
        spanArtistImagem.src = dataArtists.images[0].url
        spanNameArtist.textContent = dataArtists.name
        spanNumSeguidores.textContent = new Intl.NumberFormat().format(dataArtists.followers)
        spanSeguidores.textContent = ' Seguidores'
        spanGeneros.textContent = 'Gêneros: '
        const generosMaiusc = dataArtists.genres.map(FirstLetter)
        spanNameGeneros.textContent = generosMaiusc.join(', ')
        title.innerHTML = `${dataArtists.name} - SpotRank`

        //AppendChild
        divHeaderSeguidores.appendChild(spanNumSeguidores)
        divHeaderSeguidores.appendChild(spanSeguidores)
        divHeaderGeneros.appendChild(spanGeneros)
        divHeaderGeneros.appendChild(spanNameGeneros)
        divHeaderGeneral.appendChild(spanNameArtist)
        divHeaderGeneral.appendChild(divHeaderSeguidores)
        divHeaderGeneral.appendChild(divHeaderGeneros)
        header.appendChild(spanArtistImagem)
        header.appendChild(divHeaderGeneral)

        document.getElementById('loadingIndicator1').classList.add('hidden');
        body.className = 'bg-gradient-to-b from-green-900 from-% to-neutral-900 to-50% mx-auto min-h-screen font-sans'
        document.getElementById('main').className = ''
    }, 2500);
})