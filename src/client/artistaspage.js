document.addEventListener('DOMContentLoaded', () =>{ //Load artist
    setTimeout( async () => {
        let dataArtists = null
        try {
            const response = await fetch('/api/artists')
            const data = await response.json()
            dataArtists = data
        } catch (error) {
            console.error('Erro na API', error)
        }

        
    }, 2500);
})