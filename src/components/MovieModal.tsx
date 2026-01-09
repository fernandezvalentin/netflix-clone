import React from 'react';
import type { Movie } from '../types/movie';
import { X, Play, Plus, ThumbsUp } from 'lucide-react';
import './MovieModal.css';

interface MovieModalProps {
  movie: Movie | null;
  onClose: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose }) => {
  if (!movie) return null;

  const imageBaseUrl = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div 
          className="modal__banner"
          style={{
            backgroundImage: `url("${imageBaseUrl}${movie.backdrop_path || movie.poster_path}")`,
          }}
        >
          <div className="modal__banner--fadeBottom" />
          <div className="modal__banner--contents">
            <h1>{movie.title || movie.name}</h1>
            <div className="modal__actions">
              <button className="modal__btn modal__btn--play">
                <Play fill="black" size={20} /> Reproducir
              </button>
              <button className="modal__btn--round"><Plus size={20} /></button>
              <button className="modal__btn--round"><ThumbsUp size={20} /></button>
            </div>
          </div>
        </div>

        <div className="modal__details">
          <div className="modal__details--left">
            <p className="modal__info">
              <span className="modal__match">98% de coincidencia</span> 
              <span>{movie.release_date?.split('-')[0] || movie.first_air_date?.split('-')[0]}</span>
              <span className="modal__hd">HD</span>
            </p>
            <p className="modal__overview">{movie.overview}</p>
          </div>
          <div className="modal__details--right">
            <p><span>Géneros:</span> {movie.genre_ids.join(', ')} (Placeholder)</p>
            <p><span>Este título es:</span> Emocionante, Épico</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
