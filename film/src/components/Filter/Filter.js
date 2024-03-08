import React from "react";
import MovieList from "../MovieList/MovieList";

const Filter = ({ ratingChange, serchInput, movieData }) => {
  const filteredMovie = movieData.filter(
    (movie) =>
      movie.title.toLowerCase().includes(serchInput.toLowerCase()) &&
      movie.rating >= ratingChange
  );

  return (
    <div>
      <MovieList filtredMovie={filteredMovie} />
    </div>
  );
};

export default Filter;
