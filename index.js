const searchResults = document.getElementById('search-results');
const searchForm = document.getElementById('search');
const addToWatchlist = document.getElementsByClassName('add-to-watchlist');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchEntry = document.getElementById('search-input').value;
  fetch(`http://www.omdbapi.com/?apikey=57c7dfb6&s=${searchEntry}&page=1`)
    .then((res) => res.json())
    .then((data) => {
      const movieIDs = data.Search.map(function (movie) {
        return movie.imdbID;
      });
      searchResults.innerHTML = '';
      for (let id of movieIDs) {
        fetch(`http://www.omdbapi.com/?apikey=57c7dfb6&i=${id}`)
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            searchResults.innerHTML += `
              <div class="result-container">
              <img src=${data.Poster} alt="${data.Title}">
              <section>
                <div class="header">
                  <h3>${data.Title}</h3>
                  <img src="img/icon-star.png" alt="star icon" class="icon">
                  <p>${data.imdbRating}</p>
                </div>
                <div class="movie-data">
                  <p>${data.Runtime}</p>
                  <p>${data.Genre}</p>
                  <div class="add-to-watchlist" id="add-${data.imdbID}">
                    <img src="img/icon-plus.png" alt="plus icon" class="add-to-watchlist">
                    <p class="add-to-watchlist">Watchlist</p>
                  </div>
                </div>
                <p>${data.Plot}</p>
              </section>
              </div>
              `;
          });
      }
    });
});

// addToWatchlist.addEventListener("click", function(){console.log("Added")})

document.addEventListener('click', function (e) {
  if (e.target.id == `add-${e.target.id}`) {
    console.log('added');
    console.log(addToWatchlist[e.target.id])
    addToWatchlist[e.target.id].innerHTML = `
      <img src="img/icon-minus" alt="icon-minus">
      <p>Remove</p>
    `
  } else {
    console.log('click elsewhere');
  }
});

// function handleAdd() {
//   document
//     .getElementsByClassName('add-to-watchlist')
//     .addEventListener('click', function () {
//       console.log('added');
//     });
// }
