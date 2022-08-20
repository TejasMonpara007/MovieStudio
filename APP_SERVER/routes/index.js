var express = require('express');
var router = express.Router();

const homePage = require('../controller/main');
const aboutUs = require('../controller/about');
const allMovie = require('../controller/AllMovie');
const displayPages = require('../controller/display');

/* GET home page. */
router.get('/', homePage.index);
router.get('/about', aboutUs.about);
router.get('/movies', allMovie.myMovieList);
router.get('/movies/:moviesid', allMovie.movieInfo);
router.post('/movies/:moviesid', allMovie.doEditMovie);
router.get('/movies/:moviesid', allMovie.updateMovie);

router.route('/create-movie')
    .get(allMovie.addNewMovie)
    .post(allMovie.doAddNewMovie);

module.exports = router;
