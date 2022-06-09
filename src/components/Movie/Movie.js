/* import Styled Component Movie */
import React from 'react';
import { Link } from 'react-router-dom';
import StyledMovie from './Movie.styled';

// menerima props
function Movie(props) {
  // destructing props
  const { movie } = props;

  return (
    <StyledMovie>
      <img 
        src={movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
        alt={movie.title} 
        />
      {/* Menambahkan Link ke Title */}
      <Link to={`/movie/${movie.id}`}>
        <h3>{movie.title}</h3>
      </Link>
      <p>{movie.year || movie.release_date}</p>
    </StyledMovie>
  );
}

export default Movie;
