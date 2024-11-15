const movieService = require('../services/movieService');

// get the entire movie collection unordered
const getAllMovies = async (req, res) => {
  try {
    // try to get data using service
    const movies = await movieService.getAllMovies();
    res.status(200).json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error.message);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
};

// export functions using ES6 exports
module.exports = {
  getAllMovies,
};