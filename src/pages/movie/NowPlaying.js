import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';
import ENDPOINTS from '../../utils/constants/endpoint';

function NowPlayingMovie() {
  // Membuat state movies
  const [movies, setMovies] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getNowPlayingMovies();
    // eslint-disable-next-line
  }, []);

  // eslint-disable-next-line 
  async function getNowPlayingMovies() {
    // Fetch data dari axios
    const response = await axios(ENDPOINTS.NOW_PLAYING);

    // simpan data ke state movies
    setMovies(response.data.results);
    // eslint-disable-next-line
  }

  return (
    <>
      <Hero />
      <Movies titlePage="Now Playing Movies" movies={movies} />
    </>
  );
}

export default NowPlayingMovie;
