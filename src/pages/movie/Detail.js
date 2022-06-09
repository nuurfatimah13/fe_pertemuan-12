import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function Detail() {
  // Simpan movies (state), id (params) ke variable
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getRecommendationMovies();
    // eslint-disable-next-line 
  }, [id]);

  // eslint-disable-next-line 
  async function getRecommendationMovies() {
    // Fetch data dari axios
    const response = await axios(ENDPOINTS.RECOMMENDATIONS(id));

    // simpan data ke state movies
    setMovies(response.data.results);
    // eslint-disable-next-line 
  }

  return (
    <>
      <DetailMovie />
      <Movies titlePage="Recommendation Movies" movies={movies} />
    </>
  );
}

export default Detail;