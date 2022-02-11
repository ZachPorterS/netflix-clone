import { React, useEffect, useState } from 'react';
import axios from '../utils/axios';
import requests from '../utils/requests';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import '../styles/Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    /* Grab random movie from database for background image */
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      return request;
    }
    fetchData();
  }, []);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || "")
        .then(url => {
          /* This will search for the video
           * and grab the video id(v) from YouTube */
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch(error => console.log(error));
    }
  }
  /* Options for trailer videos */
  const opts = {
    height: "240",
    width: "100%",
    playerVars: {
      autoPlay: 1,
    },
  }

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
          <button className="banner_btn" onClick={() => handleClick(movie)}>Play</button>
          <button className="banner_btn">My List</button>
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} className="banner_video" />}
        {!trailerUrl && <h1 className='banner_desc'>{truncate(movie?.overview, 150)}</h1>}
      </div>
      <div className='banner_fadebtm' />
    </header >
  );
}

export default Banner;