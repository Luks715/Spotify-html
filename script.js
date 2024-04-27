const searchInput = document.getElementById("search-input")
const ArtistasNoGrid = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists')

function requestApi(searchTerm){
    const url = "http://localhost:3000/artists"
    fetch()
}

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if(searchInput === ''){
        resultPlaylist.classList.add('hidden')
        resultArtist.classList.remove('hidden')
        return;
    }
})