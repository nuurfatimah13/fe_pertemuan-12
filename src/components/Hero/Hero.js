/* import Styled Component Hero */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import ENDPOINTS from '../../utils/constants/endpoint';
import StyledHero, { Container } from './Hero.styled';

function Hero() {
  // membuat state movie
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const Trailer = movie && movie.videos.results[0].key;

  // eslint-disable-next-line
  useEffect(getDetailMovie, []);

  // Mendapatkan 1 data dari Trending Movies
  async function getTrendingMovies() {
    // Fetch data dari axios
    const response = await axios(ENDPOINTS.TRENDING);
    return response.data.results[0];
  }

  // Membuat fungsi untuk mendapatkan detail movie
  // eslint-disable-next-line
  async function getDetailMovie() {
    // ambil id dari trending movie
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;

    // fetch detail movie by id
    const response = await axios(ENDPOINTS.DETAIL(id));

    // set movie dengan data movie hasil fetch
    setMovie(response.data);
  }

  // menampilkan state movie
  console.log(movie);

  return (
    <Container>
      <StyledHero>
        <div className="hero__left">
          <h2>{movie.title}</h2>
          <h3>Genre: {genres}</h3>
          <p>{movie.overview}</p>
          <Button as="a"
            href={`https://www.youtube.com/watch?v=${Trailer}`}
            target="_blank">Watch Trailer</Button>
        </div>
        <div className="hero__right">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.title}
          />
        </div>
      </StyledHero>
    </Container>
  );
}

export default Hero;
