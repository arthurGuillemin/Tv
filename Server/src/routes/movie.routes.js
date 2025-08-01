const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie.controller');

router.get('/search', movieController.searchMovie);

router.post('/', movieController.addMovie);

module.exports = router;
