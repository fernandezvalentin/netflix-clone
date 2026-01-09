import React, { useState, useEffect } from 'react';
import api from '../services/api';
import type { Movie } from '../types/movie';
import { Play, Info } from 'lucide-react';
import './Hero.css';

interface HeroProps {
  fetchUrl: string;
}

const Hero: React.FC<HeroProps> = ({ fetchUrl }) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await api.get(fetchUrl);
        const results = request.data.results;
        if (results && results.length > 0) {
          setMovie(
            results[Math.floor(Math.random() * results.length)]
          );
        }
      } catch (error) {
        console.error("Error fetching hero movie:", error);
      }
    }
    fetchData();
  }, []);

  function truncate(string: string, n: number) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  const backgroundImage = movie?.backdrop_path 
    ? `${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}${movie.backdrop_path}`
    : '';

  return (
    <header
      className="hero"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("${backgroundImage}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="hero__contents">
        <h1 className="hero__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="hero__buttons">
          <button className="hero__button hero__button--white">
            <Play fill="black" size={24} />Reproducir
          </button>
          <button className="hero__button hero__button--grey">
            <Info size={24} />Más información
          </button>
        </div>
        <h1 className="hero__description">{truncate(movie?.overview || '', 150)}</h1>
      </div>

      <div className="hero--fadeBottom" />
    </header>
  );
};

export default Hero;
