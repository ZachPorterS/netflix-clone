import { React, useEffect, useState } from 'react';
import axios from '../utils/axios';
import requests from '../utils/requests';

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    /* Grab random movie from database for background image */
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      return request;
    }
    fetchData();
  }, []);

  return (
    <header className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}>
      <div className='banner_contet'>
        <h1></h1>
      </div>
    </header >
  );
}

export default Banner;