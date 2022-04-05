import React from "react";
import Movie from "./Movie";

export default function Movies(props) {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404">
              <h1>Oops!</h1>
            </div>
            <h2>404 - Page not found</h2>
            <p>
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
