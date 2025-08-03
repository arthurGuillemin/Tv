const movieService = require('../services/movie.service');

exports.searchMovie = async (req, res, next) => {
  try {
    const title = req.query.title;
    const results = await movieService.searchMovie(title);
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
};

exports.getAllMovies = async (req, res) => {
  const movies = await movieService.getAllMovies();
  res.json(movies);
};


exports.addMovie = async (req, res, next) => {
  try {
    const { tmdbId } = req.body;
    const movie = await movieService.addMovie(tmdbId);
    return res.status(201).json(movie);
  } catch (err) {
    next(err);
  }
};
