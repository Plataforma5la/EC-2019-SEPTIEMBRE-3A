import axios from "axios";

const receiveMovies = movies => ({
  type: "RECEIVE_MOVIES",
  movies
});

const receiveMovie = movie => ({
  type: "RECEIVE_MOVIE",
  movie
});

export const fetchMovies = name => dispatch =>
  axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&s=${name}`)
    .then(res => res.data)
    .then(movies => dispatch(receiveMovies(movies)));

export const fetchMovie = id => dispatch =>
  axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&i=${id}`)
    .then(res => res.data)
    .then(movie => dispatch(receiveMovie(movie)));
