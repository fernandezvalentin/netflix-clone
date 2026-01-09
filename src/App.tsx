import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Row from './components/Row';
import MovieModal from './components/MovieModal';
import { requests } from './services/api';
import type { Movie } from './types/movie';
import './App.css';

function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [view, setView] = useState<'home' | 'series' | 'movies'>('home');

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleViewChange = (newView: 'home' | 'series' | 'movies') => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getHeroFetchUrl = () => {
    switch(view) {
      case 'series': return requests.fetchNetflixOriginals;
      case 'movies': return requests.fetchMoviesTrending;
      default: return requests.fetchTrending;
    }
  };

  return (
    <div className="app">
      <Navbar activeView={view} onViewChange={handleViewChange} />
      <Hero fetchUrl={getHeroFetchUrl()} key={view} />
      
      <div className="app__rows">
        {(view === 'home' || view === 'series') && (
          <Row 
            title="ORIGINALES DE NETFLIX" 
            fetchUrl={requests.fetchNetflixOriginals} 
            isLargeRow 
            onMovieClick={handleMovieClick}
          />
        )}
        
        {view === 'home' && <Row title="Tendencias" fetchUrl={requests.fetchTrending} onMovieClick={handleMovieClick} />}
        
        {view === 'series' && <Row title="Series Populares" fetchUrl={requests.fetchSeriesTrending} onMovieClick={handleMovieClick} />}
        {view === 'movies' && <Row title="Películas Populares" fetchUrl={requests.fetchMoviesTrending} onMovieClick={handleMovieClick} />}

        {(view === 'home' || view === 'movies') && (
          <Row title="Los más valorados" fetchUrl={requests.fetchTopRatedMovies} onMovieClick={handleMovieClick} />
        )}
        
        {view === 'series' && (
          <Row title="Series mejor valoradas" fetchUrl={requests.fetchTopRatedSeries} onMovieClick={handleMovieClick} />
        )}

        {(view === 'home' || view === 'movies') && (
          <>
            <Row title="Acción" fetchUrl={requests.fetchActionMovies} onMovieClick={handleMovieClick} />
            <Row title="Comedia" fetchUrl={requests.fetchComedyMovies} onMovieClick={handleMovieClick} />
            <Row title="Terror" fetchUrl={requests.fetchHorrorMovies} onMovieClick={handleMovieClick} />
            <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} onMovieClick={handleMovieClick} />
            <Row title="Documentales" fetchUrl={requests.fetchDocumentaries} onMovieClick={handleMovieClick} />
          </>
        )}
      </div>

      {selectedMovie && (
        <MovieModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </div>
  );
}

export default App;
