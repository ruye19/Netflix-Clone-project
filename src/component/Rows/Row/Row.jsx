import React, { useEffect, useState } from 'react';
import './Row.css'
import axios from '../../../utils/axios';
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube';


const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setmovies] = useState([]);
  const [trailer, setTrailer] = useState('');
  const [errormessage, setErrormessage] = useState('');


  const baseUrl = 'https://image.tmdb.org/t/p/original';

  const handleClick = (movie) => {
    setErrormessage('')
    if (trailer) {
      setTrailer('')

    } else {
      movieTrailer(movie?.name || movie?.original_name)
        .then((url) => {
          if (!url) {
            throw new Error("Sorry, trailer not found");

          }
          const urlparams = new URLSearchParams(new URL(url).search)
          setTrailer(urlparams.get('v'))

        })
        .catch(() => {
          setTrailer('')
          setErrormessage('Sorry, we couldnt found the trailer try another one ')
          setTimeout(() => {
            setErrormessage('');
          }, 2000);
        })
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setmovies(request.data.results);
      } catch (error) {
        console.log("Error fetching movies:", error);
      }
    };

    fetchData();
  }, [fetchUrl]);
  return (
    <div className='row-posters'>
      <h2 style={{ color: 'white' }}>{title}</h2>
      <div className='row-poster'>

        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${baseUrl}${isLarge ? movie?.poster_path : movie?.backdrop_path}`}
            alt={movie?.name} className={`${isLarge && 'row_posterlarge'}`}
          />
        ))}
      </div>
      {errormessage && <p style={{ color: 'red', textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>{errormessage} 🤔</p>}
      {trailer && (<YouTube videoId={trailer} opts={{ height: "390", width: "100%", margin: '24%', playerVars: { autoplay: 1 } }} />)}
    </div>
  );
};

export default Row;
