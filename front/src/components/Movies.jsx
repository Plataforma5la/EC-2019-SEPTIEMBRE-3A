import React from "react";
import { Link } from "react-router-dom";

export default ({ movies }) => (
  <div>
    <div className="containerSis">
      {movies &&
        movies.map(movie => (
          <div key={movie.imdbID}>
            <div className="card shadow" style={{ width: "18rem" }}>
              <img src={movie.Poster} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to={`/movies/${movie.imdbID}`}>
                  <button>See More</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  </div>
);
