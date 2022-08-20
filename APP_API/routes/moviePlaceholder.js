
var express = require('express');
var router = express.Router();

const controlMovies = require('../controllers/moviePlaceholder');

router.get('/movies', controlMovies.getAllMoviesList);
router.post('/movies', controlMovies.createAllMovies);
router.get('/movies/:moviesid', controlMovies.getSingleMovie);
router.put('/movies/:moviesid', controlMovies.updateMovies);
router.delete('/movies/:moviesid', controlMovies.deleteMovies);

module.exports = router;