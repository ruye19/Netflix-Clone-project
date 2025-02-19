// Banner.jsx
import axios from '../../utils/axios';
import requests from '../../utils/requests';
import React, { useEffect, useState } from 'react';
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({})
  useEffect(() => {
    (async () => {
      try {

        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log('====================================');
        console.log(request);
        console.log('====================================');
        const randomMovie = request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ];
        setMovie(randomMovie);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    })();
  }, []);

  function Dot(str, n) {
    return str?.length > n ? str.slice(0, n - 1) +"...." : str
  }

  return (
    <div
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '70vh', 
        width: '100%', 
        backgroundPosition   : window.innerWidth > 1024 ? 'top' : 'center',

      }} className='banner'
    >
      <div className='bannerContent'>
      <div className="bannerTitle">
        <h1>{movie?.name || movie?.original_name}</h1>
      </div>
      <div className="botonsWrapper">
        <button >Watch</button>
        <button>My List</button>
      </div>
      <h5 className="description">
        {Dot(movie?.overview, 120)}
      </h5>
      </div>
      <div className="bottomFade"></div>
      
      
    </div>
  );
};

export default Banner;
