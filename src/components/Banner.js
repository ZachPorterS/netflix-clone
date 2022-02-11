import { React, useEffect, useState } from 'react';
import axios from '../utils/axios';
import requests from '../utils/requests';
import '../styles/Banner.css';

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

  /* truncate the text for the movie descriptions */
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}>
      <div className='banner_content'>
        <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_btns">
          <button className="banner_btn">Play</button>
          <button className="banner_btn">My List</button>
        </div>
        <h1 className='banner_desc'>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className='banner_fadebtm' />
    </header >
  );
}

export default Banner;