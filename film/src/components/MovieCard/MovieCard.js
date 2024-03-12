import React from "react";
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";
import { Button } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  return (
    <div>
      <>
        {console.log(movie)}
        <Card style={{ width: "18rem" }} className="movie-card">
          <Card.Img variant="top" src={movie.posterUrl} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.description}</Card.Text>
            <ReactStars
              count={5}
              value={movie.rating}
              size={24}
              activeColor="#ffd700"
              edit={false}
            />
            <Link to={`/movie-details/${movie.id}`}>
              <Button variant="secondary">Movie Trailer</Button>
            </Link>
          </Card.Body>
        </Card>
      </>
    </div>
  );
};

export default MovieCard;
