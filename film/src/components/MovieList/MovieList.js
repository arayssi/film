import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./style.css";
const MovieList = ({filtredMovie}) => {

  return (
    <div className="movie-list">
        {
            filtredMovie.map((movie,index) => (
                <MovieCard key={index} movie={movie}/>

                
            ))}
    </div>
  );
};
  

export default MovieList;