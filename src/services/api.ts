import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: 'es-ES',
  },
});

console.log("Configurando API con URL:", import.meta.env.VITE_TMDB_BASE_URL);
console.log("API Key cargada:", import.meta.env.VITE_TMDB_API_KEY ? "SÍ" : "NO");

export const requests = {
  fetchTrending: '/trending/all/week',
  fetchNetflixOriginals: '/discover/tv?with_networks=213',
  fetchTopRatedMovies: '/movie/top_rated',
  fetchTopRatedSeries: '/tv/top_rated',
  fetchActionMovies: '/discover/movie?with_genres=28',
  fetchComedyMovies: '/discover/movie?with_genres=35',
  fetchHorrorMovies: '/discover/movie?with_genres=27',
  fetchRomanceMovies: '/discover/movie?with_genres=10749',
  fetchDocumentaries: '/discover/movie?with_genres=99',
  fetchSeriesTrending: '/trending/tv/week',
  fetchMoviesTrending: '/trending/movie/week',
};

export const getMovieDetails = async (id: number, mediaType: string = 'movie') => {
  const { data } = await api.get(`/${mediaType}/${id}`);
  return data;
};

export default api;
