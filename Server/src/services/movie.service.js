const { searchTmdbMovie, getMovieDetailsById } = require('../utils/tmdb');
const supabase = require('../utils/supabase');


exports.getAllMovies = async () => {
  const { data, error } = await supabase.from('movies').select('*');
  if (error) throw error;
  return data;
};

exports.searchMovie = async (title) => {
  if (!title) throw new Error('Missing movie title');
  return await searchTmdbMovie(title);
};



exports.addMovie = async (tmdbId) => {
  if (!tmdbId) throw new Error('tmdbId is required');

  const details = await getMovieDetailsById(tmdbId);
  if (!details) throw new Error(`Aucun film trouvé pour l'ID ${tmdbId}`);

  const movieToInsert = {
    tmdb_id:      details.id,
    title:        details.title,
    synopsis:     details.overview,
    release_date: details.release_date,
    poster_url:   `https://image.tmdb.org/t/p/w500${details.poster_path}`
  };


  const { data, error } = await supabase
    .from('movies')
    .insert([movieToInsert])
    .select()
    .single();

  if (error) {
    console.error('Erreur insertion Supabase:', error);
    throw error;
  }

  console.log('Insertion réussie:', data);
  return data;
};

