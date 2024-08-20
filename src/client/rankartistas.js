const liRank = document.getElementById('liArtist')

document.addEventListener('DOMContentLoaded', () =>{
    setTimeout( async () => {
        let dataArtists = null
        try {
            const response = await fetch('/api/artists')
            const data = await response.json()
            console.log(data)
            dataArtists = data
        } catch (error) {
            console.error('Erro na API', error)
        }

        dataArtists.forEach((item, index) =>{
            const spanImagem = document.createElement('img')
            spanImagem.src = item.images[0].url
            spanImagem.alt = item.name
            spanImagem.className = "rounded-lg"
            spanImagem.width = '50'
            spanImagem.height = '50'
            const spanPosition = document.createElement('span')
            spanPosition.textContent = (index + 1).toString();
            const spanName = document.createElement('span')
            spanName.textContent = item.name
            const spanFollowers = document.createElement('span')
            spanFollowers.textContent = new Intl.NumberFormat().format(item.followers);
            const li = document.createElement('li')
            li.className = "flex space-x-3 transition hover:bg-green-600 px-2 py-1 rounded-lg items-center hover:-translate-y-1 hover:scale-110"
            li.appendChild(spanPosition)
            li.appendChild(spanImagem)
            li.appendChild(spanName)
            li.appendChild(spanFollowers)
            liRank.appendChild(li)
        })
    }, 2000);
})