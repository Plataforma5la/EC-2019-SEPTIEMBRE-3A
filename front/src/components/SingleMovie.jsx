import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default ({ movie, handleClick, favs, checkFavs, handleDelete }) => (
  <div>
    <div className="card" style={{ width: "18rem" }}>
      <img src={movie.Poster} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Plot}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{movie.Genre}</li>
        <li className="list-group-item">{movie.Year}</li>
        <li className="list-group-item">{movie.Director}</li>
      </ul>
      <div className="card-body">
        {checkFavs() ? (
          <button onClick={e => handleDelete(movie)}>
            <FaHeart />
          </button>
        ) : (
          <button onClick={e => handleClick(movie)}>
            <FaRegHeart />
          </button>
        )}
      </div>
    </div>
  </div>
);
