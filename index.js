const searchResults = document.getElementById('search-results');
const searchForm = document.getElementById('search');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchEntry = document.getElementById('search-input').value;
  fetch(`http://www.omdbapi.com/?apikey=57c7dfb6&s=${searchEntry}&page=1`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      searchResults.innerHTML = '';
      for (let movie of data.Search) {
        searchResults.innerHTML += `
        <div class="result-container">
        <img src=${movie.Poster} alt="${movie.Title}">
        <section>
          <div class="header">
            <h3>${movie.Title}</h3>
            <img src="img/icon-star.png" alt="star icon" class="icon">
            <p>${movie.imdbRating}</p>
          </div>
          <div class="movie-data">
            <p>${movie.Runtime}</p>
            <p>${movie.Genre}</p>
            <img src="img/icon-plus.png" alt="plus icon" class="icon">
            <p>Watchlist</p>
          </div>
          <p>${movie.Plot}</p>
        </section>
        </div>
        <hr>
        `;
      }
    });
});
