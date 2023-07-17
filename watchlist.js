import { renderFilmList } from "/index.js";
window.onload = (e) =>{
  let movieIDs = JSON.parse(localStorage.getItem("movieWatchlist"))
  renderFilmList(movieIDs)
}