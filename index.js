const searchResults = document.getElementById('search-results');
const searchForm = document.getElementById('search');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchEntry = document.getElementById('search-input').value;
  fetch(`http://www.omdbapi.com/?apikey=57c7dfb6&t=${searchEntry}`)
    .then((res) => res.json())
    .then((data) => {
      searchResults.innerHTML = `
      <div class="result-container">
      <img src=${data.Poster} alt="${data.Title}">
      <section>
        <div class="header">
          <h3>${data.Title}</h3>
          <img src="img/icon-star.png" alt="star icon">
          <p>${data.imdbRating}</p>
        </div>
        <div class="movie-data">
          <p>${data.Runtime}</p>
          <p>${data.Genre}</p>
          <img src="img/icon-plus.png">
          <p>Watchlist</p>
        </div>
        <p>${data.Plot}</p>
      </section>
      </div>
      `;
    });
});