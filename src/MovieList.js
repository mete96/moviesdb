import React from "react";

function MovieList(props) {
  return (
    <div>
      {props.movies.map((movie, index) => (
        <>
          <img
            src={movie.Poster}
            id="img"
            onClick={() => props.favorim(movie)}
          ></img>
        </>
      ))}
    </div>
  );
}

export default MovieList;
