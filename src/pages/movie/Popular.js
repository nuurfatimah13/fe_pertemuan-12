import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';
import ENDPOINTS from '../../utils/constants/endpoints';

function PopularMovie() {
  // Membuat state movies
  const [movies, setMovies] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getPopularMovies();
    // eslint-disable-next-line
  }, []);

  // eslint-disable-next-line 
  async function getPopularMovies() {
    // Fetch data dari axios
    const response = await axios(ENDPOINTS.POPULAR);

    // simpan data ke state movies
    setMovies(response.data.results);
    // eslint-disable-next-line
  }

  console.log(movies);


  return (
    <>
      <Hero />
      <Movies titlePage="Popular Movies" movies={movies} />
    </>
  );
}

export default PopularMovie;
