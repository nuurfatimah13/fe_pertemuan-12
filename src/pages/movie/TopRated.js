import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';
import ENDPOINTS from '../../utils/constants/endpoint';

function TopRatedMovie() {
  // Membuat state movies
  const [movies, setMovies] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getTopRatedMovies();
    // eslint-disable-next-line
  }, []);

  // eslint-disable-next-line 
  async function getTopRatedMovies() {
    // Fetch data dari axios
    const response = await axios(ENDPOINTS.TOP_RATED);

    // simpan data ke state movies
    setMovies(response.data.results);
    // eslint-disable-next-line
  }

  return (
    <>
      <Hero />
      <Movies titlePage="Top Rated Movies" movies={movies} />
    </>
  );
}

export default TopRatedMovie;
