import React, { useState, useEffect, useRef } from 'react';
import api from '../services/api';
import type { Movie } from '../types/movie';
import './Row.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface RowProps {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
  onMovieClick: (movie: Movie) => void;
}

const Row: React.FC<RowProps> = ({ title, fetchUrl, isLargeRow, onMovieClick }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await api.get(fetchUrl);
        if (request.data.results) {
          setMovies(request.data.results);
        }
      } catch (error) {
        console.error(`Error fetching row ${title}:`, error);
      }
    }
    fetchData();
  }, [fetchUrl, title]);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const imageBaseUrl = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__container">
        <button className="row__arrow row__arrow--left" onClick={() => scroll('left')}>
          <ChevronLeft />
        </button>
        
        <div className="row__posters" ref={rowRef}>
          {movies.map((movie) => (
            ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                onClick={() => onMovieClick(movie)}
                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                src={`${imageBaseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name || movie.title}
                loading="lazy"
              />
            )
          ))}
        </div>

        <button className="row__arrow row__arrow--right" onClick={() => scroll('right')}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Row;
