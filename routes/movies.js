var express = require('express');
var router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/movies', movieController.getAllMovies);

module.exports = router;