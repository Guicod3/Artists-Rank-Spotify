const header = document.getElementById('header')
const title = document.getElementById('title')
const body = document.getElementById('body')
const ul = document.getElementById('litracks')
const ulAlbum = document.getElementById('liAlbum')

const FirstLetter = (text) => { //Retornar a primeira letra maiúscula
    return text
      .toLowerCase()
      .replace(/^\w/, c => c.toUpperCase());
  };

const OpenObject = (object) => {
    let objectfinal = ''
    object.forEach((item, index) => {
        objectfinal += FirstLetter(item.name)

        if (index < object.length - 1) {
            objectfinal += ', ';
        }
    })
    return objectfinal
}

document.addEventListener('DOMContentLoaded', () =>{ //Load artist
    const id = window.location.pathname.split('/').pop();
    setTimeout( async () => {
        let dataArtists = null
        let dataTracks = null
        let dataAlbum = null

        try { //get artists
            const response = await fetch('/api/artists')
            const data = await response.json()
            dataArtists = data[id]
        } catch (error) {
            console.error('Erro na API', error)
        }

        try { //get tracks
            const idtracks = dataArtists.id
            const response = await fetch(`/api/tracks/artist/${idtracks}`)
            const data = await response.json()
            dataTracks = data
        } catch (error) {
            console.error('Erro na API', error)
        }

        dataTracks.forEach((element, index) => {
            //Create Components tracks
            const li = document.createElement('li')
            const spanNumberTracks = document.createElement('span')
            const imgtracks = document.createElement('img')
            const imgplayTracks = document.createElement('img')
            const spanNameTracks = document.createElement('span')
            const spanArtistTracks = document.createElement('span')
            const divtrakcs = document.createElement('div')
            const alinkPlay = document.createElement('a')
    
            //Create ClassName tracks
            li.className = "cursor-pointer flex items-center justify-start text-xl hover:shadow-lg transition hover:bg-green-600 px-2 py-1 rounded-lg hover:-translate-y-1 hover:scale-110 max-sm:text-sm"
            spanNumberTracks.className = "mr-3 w-7 max-sm:hidden"
            imgtracks.className = "w-12 h-12 rounded-lg mr-5 max-sm:mr-2 max-sm:size-7"
            imgplayTracks.className = "w-12 h-12"
            spanNameTracks.className = "font-bold mr-auto"
            spanArtistTracks.className = "text-gray-400 font-semibold text-sm mr-auto"
            divtrakcs.className = "flex flex-col items-center mr-5"
            alinkPlay.classList = 'ml-auto'
    
            //Changes tracks
            spanNumberTracks.textContent = (index + 1).toString();
            imgtracks.src = element.album.images[1].url
            imgplayTracks.src = '../assets/Play-Icon.png'
            spanNameTracks.textContent = element.name
            spanArtistTracks.textContent = OpenObject(element.artists)
            alinkPlay.href = element.external_urls.spotify
            alinkPlay.target = '_blank'

            //AppendChild tracks
            alinkPlay.appendChild(imgplayTracks)
            divtrakcs.appendChild(spanNameTracks)
            divtrakcs.appendChild(spanArtistTracks)
            li.appendChild(spanNumberTracks)
            li.appendChild(imgtracks)
            li.appendChild(divtrakcs)
            li.appendChild(alinkPlay)
            ul.appendChild(li)
        });

        try { //get album
            const idalbum = dataArtists.id
            const response = await fetch(`/api/albums/artist/${idalbum}`)
            const data = await response.json()
            dataAlbum = data
        } catch (error) {
            console.error('Erro na API', error)
        }

        dataAlbum.forEach((element, index) => {
            //Create Components Album
            const li = document.createElement('li')
            const spanNumberAlbum = document.createElement('span')
            const imgAlbum = document.createElement('img')
            const spanNameAlbum = document.createElement('span')
            const alinkClick = document.createElement('a')
    
            //Create ClassName album
            li.className = "mt-2 cursor-pointer flex items-center justify-start text-xl hover:shadow-lg transition hover:bg-green-600 px-2 py-1 rounded-lg hover:-translate-y-1 hover:scale-110 max-sm:text-sm"
            spanNumberAlbum.className = "mr-3 w-7 max-sm:hidden"
            imgAlbum.className = "w-12 h-12 rounded-lg mr-5 max-sm:mr-2 max-sm:size-7"
            spanNameAlbum.className = "font-bold mr-auto"
    
            //Changes album
            spanNumberAlbum.textContent = (index + 1).toString();
            imgAlbum.src = element.images[0].url
            spanNameAlbum.textContent = element.name
            alinkClick.href = element.external_urls.spotify
            alinkClick.target = '_blank'

            //AppendChild album
            li.appendChild(spanNumberAlbum)
            li.appendChild(imgAlbum)
            li.appendChild(spanNameAlbum)
            alinkClick.appendChild(li)
            ulAlbum.appendChild(alinkClick)
        });



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
        spanArtistImagem.className = 'size-64 mr-5 ml-auto rounded-lg'
        divHeaderGeneral.className = 'flex flex-col mr-auto mb-auto'
        spanNameArtist.className = 'text-8xl font-extrabold mt-7 mb-5'
        divHeaderSeguidores.className = 'ml-1 text-lg font-bold'
        divHeaderGeneros.className = 'ml-1 text-lg font-bold'
        spanNumSeguidores.className = 'text-green-500'

        //Changes header
        spanArtistImagem.src = dataArtists.images[0].url
        spanNameArtist.textContent = dataArtists.name
        spanNumSeguidores.textContent = new Intl.NumberFormat().format(dataArtists.followers)
        spanSeguidores.textContent = ' Seguidores'
        spanGeneros.textContent = 'Gêneros: '
        const generosMaiusc = dataArtists.genres.map(FirstLetter)
        spanNameGeneros.textContent = generosMaiusc.join(', ')
        title.innerHTML = `${dataArtists.name} - SpotRank`

        //AppendChild header
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
        document.getElementById('main').className = 'mx-auto'
    }, 2000);
})