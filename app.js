
async function fetchMovie(moviename){
    const response = await fetch(`https://www.omdbapi.com/?t=${moviename}&apikey=32596210`);
    const data = await response.json();
    return data
}

// fetchMovie('Batman')
document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const movie = {}
    const movies = JSON.parse(localStorage.getItem('movies')) || []
    for (const [key, value] of formData) {
        movie[key] = value;
    }

    if(movies.includes(movie.name)){ 
        document.querySelector('body').insertAdjacentHTML('afterbegin',
        `<div class="alert alert-warning alert-dismissible fade show" role="alert"> ${movie.name} already on your list</div>`)
        document.querySelector('#movie-input').value = '';
        return

    }

    const movieToAdd = await fetchMovie(movie.name)

    if (movieToAdd.Response === "False") {
       document.querySelector('body').insertAdjacentHTML('afterbegin',
        `<div class="alert alert-danger alert-dismissible fade show" role="alert"> ${movie.name} is not in our database</div>`)
        document.querySelector('#movie-input').value = '';
        return 
    }


    localStorage.setItem(movie.name, JSON.stringify(movieToAdd))

    movies.push(movie.name)
    localStorage.setItem('movies', JSON.stringify(movies))
    document.querySelector('#movie-input').value = '';
    document.querySelector('.alert')?.remove();
    renderUI();
});

function renderUI(){
    document.querySelector('#movie-list').innerHTML = '';

    const movies = JSON.parse(localStorage.getItem('movies')) || []
    movies.forEach(movie => {
        const movieElement = document.createElement('li');
        const savedMovie = JSON.parse(localStorage.getItem(movie));
        movieElement.innerHTML=`
        <div class="card mb-3" style="max-width: 500px;">
            <div class="row g-0">
            <div  class="col-md-4">
                <img loading="lazy" src="${savedMovie.Poster}" class="img-fluid  object-fit-cover rounded-start" alt="${savedMovie.Title}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${savedMovie.Title}</h5>
                <p class="card-text">${savedMovie.Plot}</p>
                ${savedMovie.Ratings[0]?.Value ? `<p class="card-text">${savedMovie.Ratings[0].Value} on ${savedMovie.Ratings[0]?.Source}</p>` : ``}
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>`
        document.querySelector('#movie-list').appendChild(movieElement);

    })
}
renderUI();

function clearLocalStorage(){
   localStorage.clear();
   document.querySelector('.alert')?.remove();
   location.reload()
}