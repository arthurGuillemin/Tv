const fetch = require('node-fetch');

const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_TOKEN = process.env.TMDB_KEY;
if (!TMDB_TOKEN) throw new Error('TMDB_KEY manquant dans .env');

const headers = {
  Authorization: `Bearer ${TMDB_TOKEN}`,
  Accept: 'application/json'
};

exports.searchTmdbMovie = async (query) => {
  const res = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`, { headers });
  if (!res.ok) throw new Error(`TMDB Search error: ${res.status}`);
  const { results } = await res.json();
  return results;
};

exports.getMovieDetailsById = async (tmdbId) => {
  if (!tmdbId) throw new Error('tmdbId requis');
  const res = await fetch(`${BASE_URL}/movie/${tmdbId}`, { headers });
  if (!res.ok) throw new Error(`TMDB Detail error: ${res.status}`);
  const data = await res.json();  
  return data;               
};

